import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MaintenancePaymentForm from "../components/maintenance-payment-form"

export default function TenantMaintenanceDetailPage({ params }: { params: { id: string } }) {
  const payment = {
    id: 1,
    tenant: "하늘마음 정신건강의학과",
    amount: 450000,
    month: "2024년 3월",
    dueDate: "2024-04-15",
    status: "대기중",
    floor: 3,
    details: {
      electricity: 250000,
      water: 50000,
      gas: 80000,
      cleaning: 70000
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        {/* 사이드바 내용 */}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center gap-x-4 mb-8">
            <Link href="/portal/maintenance">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">관리비 상세</h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>관리비 상세 내역</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500">청구 월</dt>
                    <dd className="text-lg font-medium">{payment.month}</dd>
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
                  <div className="pt-4 border-t">
                    <dt className="text-sm text-gray-500 mb-2">관리비 항목</dt>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <dd className="text-sm">전기료</dd>
                        <dd className="text-sm font-medium">{payment.details.electricity.toLocaleString()}원</dd>
                      </div>
                      <div className="flex justify-between">
                        <dd className="text-sm">수도료</dd>
                        <dd className="text-sm font-medium">{payment.details.water.toLocaleString()}원</dd>
                      </div>
                      <div className="flex justify-between">
                        <dd className="text-sm">가스비</dd>
                        <dd className="text-sm font-medium">{payment.details.gas.toLocaleString()}원</dd>
                      </div>
                      <div className="flex justify-between">
                        <dd className="text-sm">청소비</dd>
                        <dd className="text-sm font-medium">{payment.details.cleaning.toLocaleString()}원</dd>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <dd className="text-sm font-medium">총액</dd>
                        <dd className="text-sm font-medium">{payment.amount.toLocaleString()}원</dd>
                      </div>
                    </div>
                  </div>
                </dl>
                <div className="mt-6 pt-6 border-t flex justify-end">
                  {payment.status !== "완료" && (
                    <MaintenancePaymentForm
                      maintenanceId={params.id}
                      amount={payment.amount}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}