import Link from "next/link"
import { Building, CreditCard, FileText, Bell, User, Settings } from "lucide-react"

const navigation = [
  {
    name: "대시보드",
    href: "/portal",
    icon: User
  },
  {
    name: "월세",
    href: "/portal/rent",
    icon: CreditCard
  },
  {
    name: "관리비",
    href: "/portal/maintenance",
    icon: FileText
  },
  {
    name: "공지사항",
    href: "/portal/notices",
    icon: Bell
  },
  {
    name: "설정",
    href: "/portal/settings",
    icon: Settings
  }
]

export default function TenantSidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Building className="h-6 w-6" />
          <span className="text-lg font-semibold">진호메디컬빌딩</span>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}