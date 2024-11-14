"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface ResetPasswordFormData {
  newPassword: string
  confirmPassword: string
}

export default function TenantResetPasswordForm() {
  const [error, setError] = useState("")
  const router = useRouter()
  const { register, handleSubmit, watch } = useForm<ResetPasswordFormData>()

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      if (data.newPassword !== data.confirmPassword) {
        setError("새 비밀번호가 일치하지 않습니다.")
        return
      }

      // TODO: API 호출하여 비밀번호 재설정
      router.push("/portal/auth/login")
    } catch (error) {
      setError("비밀번호 재설정 중 오류가 발생했습니다.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="new-password">새 비밀번호</Label>
        <Input
          id="new-password"
          type="password"
          {...register("newPassword", { required: true })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">새 비밀번호 확인</Label>
        <Input
          id="confirm-password"
          type="password"
          {...register("confirmPassword", { required: true })}
        />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full">비밀번호 변경</Button>
      <div className="text-center">
        <Link href="/portal/auth/login">
          <Button variant="link" className="text-sm text-gray-500">
            로그인으로 돌아가기
          </Button>
        </Link>
      </div>
    </form>
  )
}