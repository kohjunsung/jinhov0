import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building, Lock } from 'lucide-react'

export default function TenantPortalLogin() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        {/* Header content (same as landing page)*/}
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Building className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              임차인 포털 로그인
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              진호 메디컬 빌딩 임차인 전용 포털입니다.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label htmlFor="email-address" className="sr-only">
                  이메일 주소
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-t-md"
                  placeholder="이메일 주소"
                />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">
                  비밀번호
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-b-md"
                  placeholder="비밀번호"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  로그인 상태 유지
                </Label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full flex justify-center items-center">
                <Lock className="h-5 w-5 mr-2" />
                로그인
              </Button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        {/* Footer content (same as landing page) */}
      </footer>
    </div>
  )
}