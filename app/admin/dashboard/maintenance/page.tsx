import { CreditCard, FileText, Link } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import MaintenanceIssueDialog from "./components/maintenance-issue-dialog"
import { getMaintenanceStats, getMaintenancePayments } from "./actions"
import MaintenanceConfirmForm from "./components/maintenance-confirm-form"


export default async function AdminMaintenancePage() {
  const stats = await getMaintenanceStats()
  const payments = await getMaintenancePayments()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">관리비 관리</h1>
        <MaintenanceIssueDialog />
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>이번 달 관리비 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">총 청구액</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total.toLocaleString()}원</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">납부 완료</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.completed.toLocaleString()}원</div>
                <p className="text-xs text-muted-foreground">
                  {stats.completedPercentage}% 완료
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">미납</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.pending.toLocaleString()}원</div>
                <p className="text-xs text-muted-foreground">
                  {stats.pendingPercentage}% 미납
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>관리비 납부 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>임차인</TableHead>
                <TableHead>층</TableHead>
                <TableHead>청구 월</TableHead>
                <TableHead>금액</TableHead>
                <TableHead>납부기한</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">
                    {typeof payment.tenant === 'string' ? payment.tenant : payment.tenant.name}
                  </TableCell>
                  <TableCell>
                    {typeof payment.tenant === 'string' ? '-' : `${payment.tenant.floor}층`}
                  </TableCell>
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
                    <div className="flex space-x-2">
                      <Link href={`/admin/dashboard/maintenance/${payment.id}`}>
                        <Button variant="outline" size="sm">상세보기</Button>
                      </Link>
                      {payment.status !== "완료" && (
                        <MaintenanceConfirmForm maintenanceId={payment.id} />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}