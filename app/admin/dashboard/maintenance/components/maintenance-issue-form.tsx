"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"

interface MaintenanceIssueFormData {
  month: string
  dueDate: string
}

export default function MaintenanceIssueForm() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<MaintenanceIssueFormData>()

  const onSubmit = async (data: MaintenanceIssueFormData) => {
    try {
      setIsLoading(true)
      setError("")

      const response = await fetch("/api/admin/maintenance/issue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("관리비 청구서 발행 중 오류가 발생했습니다.")
      }

      setOpen(false)
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : "관리비 청구서 발행 중 오류가 발생했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          관리비 청구서 발행
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>관리비 청구서 발행</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="month">청구 월</Label>
            <Input
              id="month"
              type="month"
              {...register("month", { required: true })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">납부 기한</Label>
            <Input
              id="dueDate"
              type="date"
              {...register("dueDate", { required: true })}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "처리 중..." : "발행하기"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}