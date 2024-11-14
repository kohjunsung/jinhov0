import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminNoticeCreatePage() {
  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Link href="/admin/dashboard/notices">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">공지사항 작성</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>공지사항 작성</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">공지사항 제목</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="공지사항 제목을 입력하세요"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">공지사항 종류</label>
              <select className="w-full p-2 border rounded-md">
                <option value="공지사항">공지사항</option>
                <option value="이벤트">이벤트</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">공지사항 내용</label>
              <textarea
                className="w-full h-64 p-2 border rounded-md"
                placeholder="공지사항 내용을 입력하세요"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <Button variant="outline">취소</Button>
              <Button>작성하기</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
