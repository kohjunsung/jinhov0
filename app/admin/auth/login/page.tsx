import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import AdminLoginForm from "@/components/admin/AdminLoginForm"

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions)
  
  if (session?.user?.role) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full">
        <AdminLoginForm />
      </div>
    </div>
  )
}
