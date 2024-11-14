import { Plus, FileText } from "lucide-react"
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

const notices = [
  {
    id: 1,
    title: "4월 관리비 인상 안내",
    date: "2024-03-15",
    target: "전체",
    status: "게시중"
  },
  {
    id: 2,
    title: "주차장 도색 공사 안내",
    date: "2024-03-10",
    target: "전체",
    status: "게시중"
  },
  {
    id: 3,
    title: "엘리베이터 정기 점검 안내",
    date: "2024-03-01",
    target: "전체",
    status: "만료"
  }
]

export default function AdminNoticesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">공지사항 관리</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          공지사항 작성
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>공지사항 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>제목</TableHead>
                <TableHead>작성일</TableHead>
                <TableHead>대상</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell className="font-medium">{notice.title}</TableCell>
                  <TableCell>{notice.date}</TableCell>
                  <TableCell>{notice.target}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      notice.status === "게시중" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {notice.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">수정</Button>
                      <Button variant="outline" size="sm">삭제</Button>
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
