"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"

interface MaintenancePaymentFormData {
  maintenanceId: string
  amount: number
}

export default function MaintenancePaymentForm({ 
  maintenanceId, 
  amount,
  onSuccess 
}: { 
  maintenanceId: string
  amount: number
  onSuccess?: () => void 
}) {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { handleSubmit } = useForm<MaintenancePaymentFormData>()

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      setError("")

      const response = await fetch(`/api/maintenance/${maintenanceId}/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      })

      if (!response.ok) {
        throw new Error("결제 처리 중 오류가 발생했습니다.")
      }

      onSuccess?.()
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : "결제 처리 중 오류가 발생했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "처리 중..." : "납부하기"}
      </Button>
    </form>
  )
}