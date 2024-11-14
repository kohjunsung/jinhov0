import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <h2 className="text-xl font-semibold text-gray-700">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            요청하신 페이지를 찾을 수 없습니다. 주소가 올바른지 확인해 주시거나 아래 버튼을 통해 이동해 주세요.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              홈으로 가기
            </Link>
          </Button>
          <Button asChild>
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              이전 페이지로
            </Link>
          </Button>
        </div>

        <div className="text-sm text-gray-500">
          Error Code: NOT_FOUND
          <br />
          <span className="font-mono text-xs">ID: icn1::jg5nf-1731399592869-85539a0f7660</span>
        </div>
      </div>
    </div>
  )
}