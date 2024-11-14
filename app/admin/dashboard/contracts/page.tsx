import { FileText, Plus } from "lucide-react"
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

async function getContracts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contracts`, {
    cache: "no-store"
  });
  const data = await res.json();
  
  return data.map((contract: any) => ({
    ...contract,
    rent: `${contract.rent.toLocaleString()}원`,
    deposit: `${contract.deposit.toLocaleString()}원`,
    status: contract.status === "active" ? "진행 중" : "만료"
  }));
}

export default async function AdminContractsPage() {
  const contracts = await getContracts();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">계약 관리</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          신규 계약 등록
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>계약 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">총 계약 수</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3건</div>
                <p className="text-xs text-muted-foreground">
                  전체 임대 공간의 100%
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">월 임대료 총액</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₩7,500,000</div>
                <p className="text-xs text-muted-foreground">
                  보증금 총액: ₩180,000,000
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>계약 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>임차인</TableHead>
                <TableHead>층</TableHead>
                <TableHead>계약기간</TableHead>
                <TableHead>월 임대료</TableHead>
                <TableHead>보증금</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.tenant}</TableCell>
                  <TableCell>{contract.floor}층</TableCell>
                  <TableCell>{contract.period}</TableCell>
                  <TableCell>{contract.rent}</TableCell>
                  <TableCell>{contract.deposit}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      {contract.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">상세보기</Button>
                      <Button variant="outline" size="sm">갱신</Button>
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
