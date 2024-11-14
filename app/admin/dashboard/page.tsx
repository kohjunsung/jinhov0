import { Building, CreditCard, Users, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// eslint-disable-next-line no-unused-vars
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const tenants = [
    { id: 1, name: "A 의원", floor: "3", contractEnd: "2024-12-31" },
    { id: 2, name: "B 약국", floor: "1", contractEnd: "2025-06-30" },
    { id: 3, name: "C 한의원", floor: "2", contractEnd: "2024-09-30" },
  ];

  const facilities = [
    { id: "1", name: "엘리베이터", location: "공용구역", nextInspection: "2024-04-15" },
    { id: "2", name: "소방설비", location: "전체", nextInspection: "2024-05-01" },
    { id: "3", name: "냉난방시설", location: "중앙제어실", nextInspection: "2024-04-30" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 임차인</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3개 업체</div>
            <p className="text-xs text-muted-foreground">
              입주율 60%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">이번 달 월세</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₩7,500,000</div>
            <p className="text-xs text-muted-foreground">
              납부율 33%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">이번 달 관리비</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₩1,550,000</div>
            <p className="text-xs text-muted-foreground">
              납부율 33.5%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">시설 점검</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1건</div>
            <p className="text-xs text-muted-foreground">
              7일 이내 점검 필요
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>최근 계약 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tenants.map((tenant) => (
                <div key={tenant.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{tenant.name}</p>
                    <p className="text-sm text-gray-500">{tenant.floor}층</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">계약 만료일</p>
                    <p className="font-medium">{tenant.contractEnd}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>시설 점검 일정</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {facilities?.map((facility: {
                id: string;
                name: string;
                location: string;
                nextInspection: string;
              }) => (
                <div key={facility.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{facility.name}</p>
                    <p className="text-sm text-gray-500">{facility.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">다음 점검일</p>
                    <p className="font-medium">{facility.nextInspection}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
