import { Suspense } from "react";
import { Download, FileText, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

export default async function ContractsPage() {
  const contracts = await getContracts();
  const currentContract = contracts.find(c => c.status === "진행 중");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">계약 관리</h1>
        <Button variant="outline">
          <LogOut className="h-4 w-4 mr-2" />
          로그아웃
        </Button>
      </div>

      <Suspense fallback={<div>로딩 중...</div>}>
        {currentContract && (
          <Card>
            <CardHeader>
              <CardTitle>현재 계약 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">계약 기간</p>
                  <p className="text-lg font-medium">{currentContract.period}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">월 임대료</p>
                  <p className="text-lg font-medium">{currentContract.rent}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">보증금</p>
                  <p className="text-lg font-medium">{currentContract.deposit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">상태</p>
                  <p className="text-lg font-medium">{currentContract.status}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>계약 이력</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>계약 기간</TableHead>
                  <TableHead>월 임대료</TableHead>
                  <TableHead>보증금</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>비고</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contracts.map((contract: any) => (
                  <TableRow key={contract.id}>
                    <TableCell>{contract.period}</TableCell>
                    <TableCell>{contract.rent}</TableCell>
                    <TableCell>{contract.deposit}</TableCell>
                    <TableCell>{contract.status}</TableCell>
                    <TableCell>{contract.notes || "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Suspense>
    </div>
  );
}
