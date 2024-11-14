import { Building, Plus, Tool } from "lucide-react"
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

const facilities = [
  {
    id: 1,
    name: "엘리베이터",
    location: "공용",
    lastInspection: "2024-03-15",
    nextInspection: "2024-04-15",
    status: "정상",
    contractor: "한국승강기안전공단"
  },
  {
    id: 2,
    name: "주차장",
    location: "지하 1층",
    lastInspection: "2024-03-01",
    nextInspection: "2024-04-01",
    status: "점검 필요",
    contractor: "성실시설관리"
  },
  {
    id: 3,
    name: "냉난방시설",
    location: "전체",
    lastInspection: "2024-02-28",
    nextInspection: "2024-03-28",
    status: "정상",
    contractor: "대한기계설비"
  }
]

export default function AdminFacilitiesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">시설 관리</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          시설 추가
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>시설 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">전체 시설</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3개</div>
                <p className="text-xs text-muted-foreground">
                  주요 시설 기준
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">점검 필요</CardTitle>
                <Tool className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1개</div>
                <p className="text-xs text-muted-foreground">
                  7일 이내 점검 필요
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>시설 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>시설명</TableHead>
                <TableHead>위치</TableHead>
                <TableHead>최근 점검일</TableHead>
                <TableHead>다음 점검일</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>관리업체</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facilities.map((facility) => (
                <TableRow key={facility.id}>
                  <TableCell className="font-medium">{facility.name}</TableCell>
                  <TableCell>{facility.location}</TableCell>
                  <TableCell>{facility.lastInspection}</TableCell>
                  <TableCell>{facility.nextInspection}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      facility.status === "정상" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {facility.status}
                    </span>
                  </TableCell>
                  <TableCell>{facility.contractor}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">상세보기</Button>
                      <Button variant="outline" size="sm">점검 기록</Button>
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
