import { Building, CreditCard, Users, Wrench, FileText } from "lucide-react"
import Link from "next/link"

const navigation = [
  {
    name: "대시보드",
    href: "/admin/dashboard",
    icon: Building
  },
  {
    name: "임차인 관리",
    href: "/admin/dashboard/tenants",
    icon: Users
  },
  {
    name: "월세 관리",
    href: "/admin/dashboard/rent",
    icon: CreditCard
  },
  {
    name: "관리비 관리",
    href: "/admin/dashboard/maintenance",
    icon: CreditCard
  },
  {
    name: "시설 관리",
    href: "/admin/dashboard/facilities",
    icon: Wrench
  },
  {
    name: "공지사항 관리",
    href: "/admin/dashboard/notices",
    icon: FileText
  }
]

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r">
        <div className="h-16 flex items-center px-6 border-b">
          <h1 className="text-lg font-bold">진호메디컬빌딩</h1>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-x-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {children}
      </main>
    </div>
  )
}
