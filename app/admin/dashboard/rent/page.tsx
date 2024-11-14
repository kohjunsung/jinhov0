import { CreditCard, FileText } from "lucide-react"
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

const rentPayments = [
  {
    id: 1,
    tenant: "하늘마음 정신건강의학과",
    amount: 2000000,
    dueDate: "2024-04-01",
    status: "대기중",
    floor: 3
  },
  {
    id: 2,
    tenant: "맑은눈 안과",
    amount: 2500000,
    dueDate: "2024-04-01",
    status: "완료",
    floor: 4
  },
  {
    id: 3,
    tenant: "튼튼 정형외과",
    amount: 3000000,
    dueDate: "2024-04-01",
    status: "대기중",
    floor: 5
  }
]

export default function AdminRentPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">월세 관리</h1>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          월세 청구서 발행
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>이번 달 월세 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">총 청구액</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₩7,500,000</div>
                <p className="text-xs text-muted-foreground">
                  전월 대비 동일
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">납부 완료</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₩2,500,000</div>
                <p className="text-xs text-muted-foreground">
                  33% 완료
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">미납</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₩5,000,000</div>
                <p className="text-xs text-muted-foreground">
                  67% 미납
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>월세 납부 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>임차인</TableHead>
                <TableHead>층</TableHead>
                <TableHead>금액</TableHead>
                <TableHead>납부기한</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rentPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.tenant}</TableCell>
                  <TableCell>{payment.floor}층</TableCell>
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
                      <Button variant="outline" size="sm">상세보기</Button>
                      {payment.status !== "완료" && (
                        <Button variant="outline" size="sm">납부 확인</Button>
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
