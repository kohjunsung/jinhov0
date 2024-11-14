"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

interface TenantMaintenancePaymentFormProps {
  maintenanceId: string | number
  amount: number
  onSuccess?: () => void
}

export default function TenantMaintenancePaymentForm({
  maintenanceId,
  amount,
  onSuccess
}: TenantMaintenancePaymentFormProps) {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    try {
      setIsLoading(true)
      setError("")

      // TODO: 실제 결제 API 연동
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
    <div>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">결제 금액</span>
            <span className="text-lg font-medium">{amount.toLocaleString()}원</span>
          </div>
          <Button 
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "처리 중..." : "납부하기"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}