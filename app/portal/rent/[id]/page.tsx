import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TenantRentDetailPage({ params }: { params: { id: string } }) {
  const payment = {
    id: 1,
    tenant: "하늘마음 정신건강의학과",
    amount: 2000000,
    dueDate: "2024-04-01",
    status: "대기중",
    floor: 3,
    paymentDate: null,
    receipt: null
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        {/* 사이드바 내용 */}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center gap-x-4 mb-8">
            <Link href="/portal/rent">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">월세 상세</h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>납부 정보</CardTitle>
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
                  {payment.paymentDate && (
                    <div>
                      <dt className="text-sm text-gray-500">납부일</dt>
                      <dd className="text-lg font-medium">{payment.paymentDate}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-6 pt-6 border-t flex justify-between items-center">
                  {payment.receipt ? (
                    <Button variant="outline">영수증 보기</Button>
                  ) : payment.status !== "완료" ? (
                    <Button>납부하기</Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}