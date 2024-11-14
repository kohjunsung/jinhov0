import { Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminLoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building className="h-12 w-12" />
          </div>
          <CardTitle className="text-2xl">진호메디컬빌딩</CardTitle>
          <p className="text-sm text-gray-600">관리자 로그인</p>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="admin@example.com" />
              </div>
              <div>
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">로그인</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
