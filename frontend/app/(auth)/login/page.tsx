'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LoginIllustration from '@/components/login-illustration'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { login as loginUser } from "@/services/auth";
export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError("Please fill in all fields");
        setIsLoading(false);
        return;
      }

      const data = await loginUser(email, password);
      
      console.log("LOGIN RESPONSE =", data);
      console.log("ACCESS TOKEN =", data.access_token);

      // console.log(data);

      // Save JWT token
      localStorage.setItem("token", data.access_token);

      // Save user (optional)
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full relative z-10">
        {/* Left side - Illustration (Desktop only) */}
       {/* Left Side */}
<div className="hidden lg:flex flex-col justify-center items-center text-center px-10">

  <h1 className="text-5xl font-extrabold leading-tight">
    <span className="text-[#003366]">Intelligent</span>
    <br />
    <span className="text-green-600">Lending.</span>
  </h1>

  <h2 className="text-4xl font-bold text-[#003366] mt-2">
    Powered by <span className="text-green-600">AI</span>
  </h2>

  <p className="mt-8 text-xl text-gray-600 max-w-md leading-9">
    Analyze MSME financial health, assess lending risk,
    generate AI recommendations and accelerate credit
    decisions in seconds.
  </p>

  <div className="flex justify-center gap-3 mt-10 flex-nowrap">

    <span className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium">
      AI Decision
    </span>

    <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
      Credit Score
    </span>

    <span className="px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
      MSME
    </span>

    <span className="px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-medium">
      Analytics
    </span>

  </div>

</div>

        {/* Right side - Login Form */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            {/* Logo and Tagline */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">FS</span>
                </div>
                <h1 className="text-2xl font-bold text-primary">FinSaarthi AI</h1>
              </div>
              <p className="text-muted text-sm">
  AI-Powered MSME Financial Health & Credit Intelligence Platform
</p>
            </div>

            {/* Welcome Section */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Welcome to FinSaarthi AI</h2>
              <p className="text-muted">Sign in to your account to continue</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="h-11 bg-input border-border focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="h-11 bg-input border-border pr-10 focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                    className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
                  />
                  <span className="text-sm text-foreground">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-primary transition-colors font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
  type="submit"
  disabled={isLoading}
  className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
>
  {isLoading ? 'Signing In...' : 'Sign In'}
</button>
<div className="text-center mt-6 space-y-2">

  <p className="text-xs text-gray-500">
    Powered by AI • ULI • OCEN • Account Aggregator
  </p>

  <p className="text-xs text-gray-500">
    Developed by
    <span className="font-bold text-[#003366] ml-1">
      TEAM ZYNEX
    </span>
    <span className="text-red-500 ml-1">❤</span>
  </p>

</div>
            </form>

            {/* Footer Text */}
           <div className="text-center space-y-2 pt-4">

  
</div>
          </div>
        </div>
      </div>
    </div>
  )
}
