import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone } from 'lucide-react'

const tenants = [
  {
    id: 1,
    name: "하늘마음 정신건강의학과",
    specialty: "정신건강의학과",
    floor: 3,
    doctor: "김하늘 원장",
    hours: "평일 09:00-18:00, 토요일 09:00-13:00",
    phone: "02-123-4567"
  },
  {
    id: 2,
    name: "맑은눈 안과",
    specialty: "안과",
    floor: 4,
    doctor: "이맑음 원장",
    hours: "평일 09:00-19:00, 토요일 09:00-15:00",
    phone: "02-234-5678"
  },
  {
    id: 3,
    name: "튼튼 정형외과",
    specialty: "정형외과",
    floor: 5,
    doctor: "박튼튼 원장",
    hours: "평일 08:30-18:30, 토요일 09:00-13:00",
    phone: "02-345-6789"
  }
]

function TenantCard({ tenant }: { tenant: { 
  id: number;
  name: string;
  specialty: string;
  floor: number;
  doctor: string;
  hours: string;
  phone: string;
} }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{tenant.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{tenant.specialty} - {tenant.doctor}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{tenant.floor}층</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{tenant.hours}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gray-500" />
            <span>{tenant.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TenantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">입주 의료기관 소개</h1>
            <p className="text-xl text-center text-gray-600 mb-12">진호 메디컬 빌딩의 우수한 의료진을 만나보세요</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tenants.map((tenant) => (
                <TenantCard key={tenant.id} tenant={tenant} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}