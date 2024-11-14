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
        <h1 className="text-2xl font-bold text-gray-900">관리비 청구서 발행</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>새 관리비 청구서</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">청구 월</label>
                <input
                  type="month"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">납부 기한</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">임차인 선택</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">임차인을 선택하세요</option>
                <option value="하늘마음 정신건강의학과">하늘마음 정신건강의학과 (3층)</option>
                <option value="맑은눈 안과">맑은눈 안과 (4층)</option>
                <option value="튼튼 정형외과">튼튼 정형외과 (5층)</option>
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">관리비 항목</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">전기료</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">수도료</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">가스비</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">청소비</label>
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
              <Button>청구서 발행</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
