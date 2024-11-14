import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Building, ParkingSquare, DoorOpen, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const floors = [
  {
    level: 7,
    tenants: ["피부과", "성형외과"],
    description: "미용 클리닉 특화 층",
    facilities: "레이저 시술실, 수술실"
  },
  {
    level: 6,
    tenants: ["치과", "교정과"],
    description: "치과 특화 층",
    facilities: "CT실, 기공실"
  },
  {
    level: 5,
    tenants: ["튼튼 정형외과"],
    description: "정형외과 전문",
    facilities: "물리치료실, X-ray실"
  },
  {
    level: 4,
    tenants: ["맑은눈 안과"],
    description: "안과 전문",
    facilities: "레이저실, 검안실"
  },
  {
    level: 3,
    tenants: ["하늘마음 정신건강의학과"],
    description: "정신건강의학과 전문",
    facilities: "상담실, 치료실"
  },
  {
    level: 2,
    tenants: ["내과", "이비인후과"],
    description: "일반 진료 층",
    facilities: "검사실, 처치실"
  },
  {
    level: 1,
    tenants: ["약국", "편의점"],
    description: "편의시설 및 주출입구",
    facilities: "안내데스크, 주차관리실"
  },
  {
    level: -1,
    tenants: ["주차장"],
    description: "지하주차장 (50대 수용)",
    facilities: "전기차 충전소, 방재실"
  }
]

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">시설안내</h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              지하 1층부터 지상 7층까지 최신 의료 시설을 갖춘 프리미엄 메디컬 빌딩입니다.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 건물 출입 안내 */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">출입 안내</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <DoorOpen className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">정문</h3>
                      <p className="text-gray-600">테헤란로 방면 메인 출입구</p>
                      <p className="text-gray-600 mt-1">운영시간: 06:00 - 23:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <ParkingSquare className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">후문 (주차장 연결)</h3>
                      <p className="text-gray-600">지하주차장에서 바로 연결되는 후문</p>
                      <p className="text-gray-600 mt-1">24시간 이용 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 층별 안내 */}
              <div className="space-y-6">
                {floors.map((floor) => (
                  <div key={floor.level} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {floor.level > 0 ? `${floor.level}층` : "지하 1층"}
                        </h3>
                        <p className="text-gray-600 mb-1">{floor.description}</p>
                        <p className="text-gray-500 text-sm">{floor.facilities}</p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {floor.tenants.map((tenant, index) => (
                          <Link
                            key={index}
                            href="/tenants"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800"
                          >
                            {tenant}
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
