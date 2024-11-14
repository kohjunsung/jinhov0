import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminRentDetailPage({ params }: { params: { id: string } }) {
  const payment = {
    id: 1,
    tenant: "하늘마음 정신건강의학과",
    amount: 2000000,
    dueDate: "2024-04-01",
    status: "대기중",
    floor: 3
  }

  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Link href="/admin/dashboard/rent">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">월세 상세</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>임차인 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500">임차인</dt>
                <dd className="text-lg font-medium">{payment.tenant}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">층</dt>
                <dd className="text-lg font-medium">{payment.floor}층</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">납부 금액</dt>
                <dd className="text-lg font-medium">{payment.amount.toLocaleString()}원</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">납부 기한</dt>
                <dd className="text-lg font-medium">{payment.dueDate}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">상태</dt>
                <dd>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    payment.status === "완료" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {payment.status}
                  </span>
                </dd>
              </div>
            </dl>
            <div className="mt-6 pt-6 border-t flex justify-end">
              {payment.status !== "완료" && (
                <Button>납부 확인</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
