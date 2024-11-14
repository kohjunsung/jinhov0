import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

async function getNotice(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices/${id}`, {
    cache: "no-store"
  });
  const data = await res.json();
  return {
    ...data,
    date: new Date(data.createdAt).toLocaleDateString()
  };
}

export default async function TenantPortalNoticeDetail({ params }: { params: { id: string } }) {
  const notice = await getNotice(params.id);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 기존 사이드바 코드 유지 */}
      <aside className="w-64 bg-white shadow-md">
        {/* 사이드바 내용 */}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center gap-x-4 mb-8">
            <Link href="/portal/notices">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">공지사항</h1>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{notice.title}</CardTitle>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {notice.content}
              </div>
              {notice.attachments && notice.attachments.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">첨부파일</h3>
                  <ul className="space-y-2">
                    {notice.attachments.map((file: any) => (
                      <li key={file.id}>
                        <Button variant="link" className="text-blue-600 hover:text-blue-900">
                          {file.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}