import { Suspense } from "react"
import { Building, Bell, User, CreditCard, Settings, FileText, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TenantPortalSettings() {
  return (
    <div className="flex h-screen bg-gray-100">
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
            <Link href="/portal/profile" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <User className="h-4 w-4" />
              <span>내 정보</span>
            </Link>
            <Link href="/portal/settings" className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100">
              <Settings className="h-4 w-4" />
              <span>설정</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">설정</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>

          <Suspense fallback={<div>로딩 중...</div>}>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>비밀번호 변경</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">현재 비밀번호</Label>
                      <Input type="password" id="current-password" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">새 비밀번호</Label>
                      <Input type="password" id="new-password" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">새 비밀번호 확인</Label>
                      <Input type="password" id="confirm-password" />
                    </div>
                    <Button type="submit">변경하기</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>알림 설정</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>월세 납부 알림</Label>
                      <Button variant="outline">설정</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>관리비 납부 알림</Label>
                      <Button variant="outline">설정</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>공지사항 알림</Label>
                      <Button variant="outline">설정</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}