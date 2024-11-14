import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminMaintenanceCreatePage() {
  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Link href="/admin/dashboard/maintenance">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">관리비 발행</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>관리비 발행</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">관리비 발행 기간</label>
                <input
                  type="month"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">관리비 발행 날짜</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">관리비 발행 종류</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">관리비 발행 종류를 선택하세요</option>
                <option value="관리비 발행 (3월)">관리비 발행 (3월)</option>
                <option value="관리비 발행 (4월)">관리비 발행 (4월)</option>
                <option value="관리비 발행 (5월)">관리비 발행 (5월)</option>
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">관리비 발행 금액</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">관리비 발행 금액</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">관리비 발행 총액</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">관리비 발행 총액</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">관리비 발행 총액</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-x-2">
              <Button variant="outline">취소</Button>
              <Button>발행하기</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
