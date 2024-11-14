import { Suspense } from "react"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import MaintenancePaymentForm from "./components/maintenance-payment-form"

const currentMaintenance = {
  id: "current",
  amount: 450000,
  month: "2024년 3월",
  dueDate: "2024-04-15",
  status: "대기중"
}

const maintenanceHistory = [
  {
    id: 1,
    amount: 450000,
    month: "2024년 3월",
    dueDate: "2024-04-15",
    status: "대기중"
  },
  {
    id: 2,
    amount: 420000,
    month: "2024년 2월",
    dueDate: "2024-03-15",
    status: "완료"
  }
]

export default async function TenantPortalMaintenance() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        {/* 사이드바 내용 */}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">관리비 내역</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>

          <Suspense fallback={<div>로딩 중...</div>}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>이번 달 관리비 정보</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">청구 월</p>
                    <p className="text-lg font-medium">{currentMaintenance.month}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">납부 금액</p>
                    <p className="text-lg font-medium">{currentMaintenance.amount.toLocaleString()}원</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">납부 기한</p>
                    <p className="text-lg font-medium">{currentMaintenance.dueDate}</p>
                  </div>
                  {currentMaintenance.status !== "완료" && (
                    <MaintenancePaymentForm
                      maintenanceId={currentMaintenance.id}
                      amount={currentMaintenance.amount}
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>관리비 납부 내역</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>청구 월</TableHead>
                      <TableHead>금액</TableHead>
                      <TableHead>납부기한</TableHead>
                      <TableHead>상태</TableHead>
                      <TableHead>상세</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {maintenanceHistory.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.month}</TableCell>
                        <TableCell>{payment.amount.toLocaleString()}원</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            payment.status === "완료" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {payment.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Link href={`/portal/maintenance/${payment.id}`}>
                            <Button variant="outline" size="sm">상세보기</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Suspense>
        </div>
      </main>
    </div>
  )
}