import Link from 'next/link'
import { Building, User, Bell, CreditCard, Settings, FileText } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">진호 메디컬 빌딩</span>
        </Link>
      </div>
      <nav className="mt-8">
        <Link href="/portal" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <User className="h-5 w-5 mr-2" />
          대시보드
        </Link>
        <Link href="/portal/notices" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <Bell className="h-5 w-5 mr-2" />
          공지사항
        </Link>
        <Link href="/portal/rent" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <CreditCard className="h-5 w-5 mr-2" />
          월세 납부
        </Link>
        <Link href="/portal/maintenance" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <Settings className="h-5 w-5 mr-2" />
          관리비
        </Link>
        <Link href="/portal/contracts" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
          <FileText className="h-5 w-5 mr-2" />
          계약 관리
        </Link>
      </nav>
    </aside>
  )
}