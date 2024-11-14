import { Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TenantPortalLogin() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building className="h-12 w-12" />
          </div>
          <CardTitle className="text-2xl">진호메디컬빌딩</CardTitle>
          <p className="text-sm text-gray-500 mt-2">임차인 포털에 로그인하세요</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">아이디</Label>
              <Input id="username" type="text" />
            </div>
            <div>
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">로그인</Button>
          </form>
          <div className="mt-4 text-center">
            <Button variant="link" className="text-sm text-gray-500">
              비밀번호를 잊으셨나요?
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}