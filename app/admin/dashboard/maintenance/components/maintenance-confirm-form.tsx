"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface MaintenanceConfirmFormProps {
  maintenanceId: string | number
  onSuccess?: () => void
}

export default function MaintenanceConfirmForm({
  maintenanceId,
  onSuccess
}: MaintenanceConfirmFormProps) {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleConfirm = async () => {
    try {
      setIsLoading(true)
      setError("")

      const response = await fetch(`/api/admin/maintenance/${maintenanceId}/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      })

      if (!response.ok) {
        throw new Error("납부 확인 처리 중 오류가 발생했습니다.")
      }

      onSuccess?.()
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : "납부 확인 처리 중 오류가 발생했습니다.")
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
      <Button 
        onClick={handleConfirm}
        disabled={isLoading}
        variant="outline"
        size="sm"
      >
        {isLoading ? "처리 중..." : "납부 확인"}
      </Button>
    </div>
  )
}