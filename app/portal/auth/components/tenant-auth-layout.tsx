import { Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TenantAuthLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
}

export default function TenantAuthLayout({
  title,
  description,
  children
}: TenantAuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building className="h-12 w-12" />
          </div>
          <CardTitle className="text-2xl">진호메디컬빌딩</CardTitle>
          {description && (
            <p className="text-sm text-gray-500 mt-2">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}