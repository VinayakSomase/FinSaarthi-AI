import api from "@/lib/api";

export async function login(email: string, password: string) {
  const form = new URLSearchParams();

  form.append("username", email);
  form.append("password", password);

  const response = await api.post(
    "/api/auth/login",
    form,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
}