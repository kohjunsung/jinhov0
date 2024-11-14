import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Building } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">진호 메디컬 빌딩</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/facilities" className="text-gray-600 hover:text-blue-600 transition-colors">시설안내</Link>
            <Link href="/tenants" className="text-gray-600 hover:text-blue-600 transition-colors">입주 의료기관</Link>
            <Link href="/inquiries" className="text-gray-600 hover:text-blue-600 transition-colors">문의하기</Link>
            <Link href="/portal" className="text-gray-600 hover:text-blue-600 transition-colors">임차인 포털</Link>
          </div>
          <Button asChild>
            <Link href="/login">로그인</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
