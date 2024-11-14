"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileText } from "lucide-react"
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

export default function MaintenanceIssueDialog() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const data = {
      month: formData.get("month") as string,
      dueDate: formData.get("dueDate") as string,
      details: {
        electricity: Number(formData.get("electricity")),
        water: Number(formData.get("water")),
        gas: Number(formData.get("gas")),
        cleaning: Number(formData.get("cleaning"))
      }
    }

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
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="month">청구 월</Label>
            <Input
              id="month"
              name="month"
              type="month"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">납부 기한</Label>
            <Input
              id="dueDate"
              name="dueDate"
              type="date"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="electricity">전기료</Label>
            <Input
              id="electricity"
              name="electricity"
              type="number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="water">수도료</Label>
            <Input
              id="water"
              name="water"
              type="number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gas">가스비</Label>
            <Input
              id="gas"
              name="gas"
              type="number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cleaning">청소비</Label>
            <Input
              id="cleaning"
              name="cleaning"
              type="number"
              required
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