import { Suspense } from "react"
import { Building, Bell, User, CreditCard, Settings, FileText, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function getProfile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
    cache: "no-store"
  });
  return res.json();
}

export default async function TenantPortalProfile() {
  const profile = await getProfile();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <Building className="h-6 w-6" />
            <span className="text-lg font-semibold">진호메디컬빌딩</span>
          </div>
          <nav className="space-y-2">
            <Link href="/portal/rent" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <CreditCard className="h-4 w-4" />
              <span>월세</span>
            </Link>
            <Link href="/portal/maintenance" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <FileText className="h-4 w-4" />
              <span>관리비</span>
            </Link>
            <Link href="/portal/notices" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <Bell className="h-4 w-4" />
              <span>공지사항</span>
            </Link>
            <Link href="/portal/profile" className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100">
              <User className="h-4 w-4" />
              <span>내 정보</span>
            </Link>
            <Link href="/portal/settings" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <Settings className="h-4 w-4" />
              <span>설정</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">내 정보</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>

          <Suspense fallback={<div>로딩 중...</div>}>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>기본 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">병원명</dt>
                      <dd className="text-lg font-medium">{profile.tenant}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">대표자</dt>
                      <dd className="text-lg font-medium">{profile.representative}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">사업자등록번호</dt>
                      <dd className="text-lg font-medium">{profile.businessNumber}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">층</dt>
                      <dd className="text-lg font-medium">{profile.floor}층</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>연락처 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">전화번호</dt>
                      <dd className="text-lg font-medium">{profile.phone}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">이메일</dt>
                      <dd className="text-lg font-medium">{profile.email}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>계약 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">계약 시작일</dt>
                      <dd className="text-lg font-medium">{profile.contractStartDate}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">계약 만료일</dt>
                      <dd className="text-lg font-medium">{profile.contractEndDate}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">월세</dt>
                      <dd className="text-lg font-medium">{profile.monthlyRent.toLocaleString()}원</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}