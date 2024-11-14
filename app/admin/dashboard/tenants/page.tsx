import { Users, Plus } from "lucide-react"
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

const tenants = [
  {
    id: 1,
    name: "하늘마음 정신건강의학과",
    specialty: "정신건강의학과",
    floor: 3,
    doctor: "김하늘 원장",
    hours: "평일 09:00-18:00, 토요일 09:00-13:00",
    phone: "02-123-4567",
    contractStart: "2023-01-01",
    contractEnd: "2025-12-31",
    monthlyRent: 2000000
  },
  {
    id: 2,
    name: "맑은눈 안과",
    specialty: "안과",
    floor: 4,
    doctor: "이맑음 원장",
    hours: "평일 09:00-19:00, 토요일 09:00-15:00",
    phone: "02-234-5678",
    contractStart: "2023-03-01",
    contractEnd: "2026-02-28",
    monthlyRent: 2500000
  },
  {
    id: 3,
    name: "튼튼 정형외과",
    specialty: "정형외과",
    floor: 5,
    doctor: "박튼튼 원장",
    hours: "평일 08:30-18:30, 토요일 09:00-13:00",
    phone: "02-345-6789",
    contractStart: "2023-06-01",
    contractEnd: "2025-05-31",
    monthlyRent: 3000000
  }
]

export default function AdminTenantsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">임차인 관리</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          임차인 추가
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>임차인 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>상호명</TableHead>
                <TableHead>층</TableHead>
                <TableHead>대표자</TableHead>
                <TableHead>연락처</TableHead>
                <TableHead>계약기간</TableHead>
                <TableHead>월세</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell className="font-medium">{tenant.name}</TableCell>
                  <TableCell>{tenant.floor}층</TableCell>
                  <TableCell>{tenant.doctor}</TableCell>
                  <TableCell>{tenant.phone}</TableCell>
                  <TableCell>
                    {tenant.contractStart} ~ {tenant.contractEnd}
                  </TableCell>
                  <TableCell>{tenant.monthlyRent.toLocaleString()}원</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">상세보기</Button>
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
