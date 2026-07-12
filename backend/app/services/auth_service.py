from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserRegister

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)


def register_user(db: Session, user: UserRegister):

    # Check if email already exists
    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        return {
            "success": False,
            "message": "Email already registered"
        }

    # Create new user
    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
        role="Banker"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "success": True,
        "message": "User registered successfully",
        "user": {
            "id": new_user.id,
            "name": new_user.name,
            "email": new_user.email,
            "role": new_user.role
        }
    }


def get_all_users(db: Session):
    return db.query(User).all()


def get_user_by_id(user_id: int, db: Session):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        return {
            "success": False,
            "message": "User not found"
        }

    return user


def login_user(
    db: Session,
    email: str,
    password: str
):

    print("========== LOGIN DEBUG ==========")
    print("Email received:", repr(email))
    print("Password received:", repr(password))

    existing_user = db.query(User).filter(
        User.email == email
    ).first()

    print("User found:", existing_user is not None)

    if existing_user:
        print("Database email:", existing_user.email)

    if not existing_user:
        return {
            "success": False,
            "message": "Invalid email or password"
        }  

    # # Verify password
    # if not verify_password(
    #     password,
    #     existing_user.password
    # ):
    #     return {
    #         "success": False,
    #         "message": "Invalid email or password"
    #     }

    # Verify password
    print("Entered Password:", password)
    print("Stored Hash:", existing_user.password)

    result = verify_password(
        password,
        existing_user.password
    )

    print("Password Match:", result)

    # if not result:
    #     return {
    #         "success": False,
    #         "message": "Invalid email or password"
    #     }

    # Generate JWT
    access_token = create_access_token(
        data={
            "sub": existing_user.email
        }
    )

    return {
        "success": True,
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": existing_user.id,
            "name": existing_user.name,
            "email": existing_user.email,
            "role": existing_user.role
        }
    }