import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import TenantAuthLayout from "./components/tenant-auth-layout"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getServerSession()

  if (session?.user) {
    redirect("/portal")
  }

  return (
    <TenantAuthLayout
      title="진호메디컬빌딩"
      description="임차인 포털에 로그인하세요"
    >
      {children}
    </TenantAuthLayout>
  )
}