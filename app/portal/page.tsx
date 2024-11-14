import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Building, CreditCard, FileText, LogOut, Settings, User } from 'lucide-react'

export default function TenantPortalDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">진호 메디컬 빌딩</span>
          </Link>
        </div>
        <nav className="mt-8">
          <Link href="/tenant-portal" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
            <User className="h-5 w-5 mr-2" />
            대시보드
          </Link>
          <Link href="/tenant-portal/notices" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <Bell className="h-5 w-5 mr-2" />
            공지사항
          </Link>
          <Link href="/tenant-portal/rent" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <CreditCard className="h-5 w-5 mr-2" />
            월세 납부
          </Link>
          <Link href="/tenant-portal/maintenance" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <Settings className="h-5 w-5 mr-2" />
            관리비
          </Link>
          <Link href="/tenant-portal/contracts" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <FileText className="h-5 w-5 mr-2" />
            계약 관리
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">임차인 포털 대시보드</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>다음 월세 납부일</CardTitle>
                <CardDescription>월세 납부 정보</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2024년 4월 1일</p>
                <p className="text-gray-600">금액: 2,000,000원</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>최근 관리비</CardTitle>
                <CardDescription>2024년 3월</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">450,000원</p>
                <p className="text-gray-600">납부 기한: 2024년 4월 15일</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>계약 만료일</CardTitle>
                <CardDescription>현재 계약 정보</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2025년 12월 31일</p>
                <p className="text-gray-600">갱신 예정: 2025년 10월 1일</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">최근 공지사항</h2>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-200">
                  {recentNotices.map((notice) => (
                    <li key={notice.id} className="p-4 hover:bg-gray-50">
                      <Link href={`/tenant-portal/notices/${notice.id}`} className="block">
                        <p className="text-sm font-medium text-gray-900">{notice.title}</p>
                        <p className="text-sm text-gray-500">{notice.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

const recentNotices = [
  { id: 1, title: "4월 관리비 납부 안내", date: "2024-03-25" },
  { id: 2, title: "주차장 이용 규정 변경 안내", date: "2024-03-20" },
  { id: 3, title: "건물 정기 소독 일정 안내", date: "2024-03-15" },
  { id: 4, title: "임대차 계약 갱신 절차 안내", date: "2024-03-10" },
]