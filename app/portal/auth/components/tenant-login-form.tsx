"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface LoginFormData {
  email: string
  password: string
}

export default function TenantLoginForm() {
  const [error, setError] = useState("")
  const router = useRouter()
  const { register, handleSubmit } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
      } else {
        router.push("/portal")
      }
    } catch (error) {
      setError("로그인 중 오류가 발생했습니다.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          {...register("password", { required: true })}
        />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full">로그인</Button>
      <div className="text-center">
        <Link href="/portal/auth/forgot-password">
          <Button variant="link" className="text-sm text-gray-500">
            비밀번호를 잊으셨나요?
          </Button>
        </Link>
      </div>
    </form>
  )
}