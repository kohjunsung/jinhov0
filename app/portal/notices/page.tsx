import { Suspense } from "react";
import { Bell, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getNotices() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`, {
    cache: "no-store"
  });
  const data = await res.json();
  
  // 7일 이내의 공지사항은 isNew: true 설정
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  return data.map((notice: any) => ({
    ...notice,
    date: new Date(notice.createdAt).toLocaleDateString(),
    isNew: new Date(notice.createdAt) > sevenDaysAgo
  }));
}

export default async function TenantPortalNotices() {
  const notices = await getNotices();
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 기존 사이드바 코드 유지 */}
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">공지사항</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>

          <Suspense fallback={<div>로딩 중...</div>}>
            <Card>
              <CardHeader>
                <CardTitle>전체 공지사항</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-gray-200">
                  {notices.map((notice: any) => (
                    <li key={notice.id} className="py-4">
                      <Link href={`/portal/notices/${notice.id}`} className="block hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{notice.title}</p>
                            <p className="text-sm text-gray-500">{notice.date}</p>
                          </div>
                          <Bell className={`h-5 w-5 ${notice.isNew ? "text-blue-600" : "text-gray-400"}`} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
