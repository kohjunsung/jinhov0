import { Suspense } from "react";
import { Building, Bell, User, CreditCard, Settings, FileText, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getRentPayments() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rent`, {
    cache: "no-store"
  });
  return res.json();
}

export default async function TenantPortalRent() {
  const rentHistory = await getRentPayments();
  const nextPayment = rentHistory.find(payment => payment.status === "대기중") || rentHistory[0];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        {/* 기존 사이드바 코드 */}
        startLine: 11
        endLine: 39
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">월세 납부 내역</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>

          <Suspense fallback={<div>로딩 중...</div>}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>다음 월세 납부 정보</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">납부 예정일</p>
                    <p className="text-lg font-medium">{nextPayment.dueDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">납부 금액</p>
                    <p className="text-lg font-medium">{nextPayment.amount}</p>
                  </div>
                  {nextPayment.status !== "완료" && <Button>납부하기</Button>}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>월세 납부 내역</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">납부일</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">금액</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">영수증</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {rentHistory.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.paymentDate || item.dueDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.status === "완료" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.receipt && (
                              <Button variant="link" className="text-blue-600 hover:text-blue-900">
                                보기
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
