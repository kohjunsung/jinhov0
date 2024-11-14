import { Building, Bell, User, CreditCard, Settings, FileText, LogOut, Phone, MessageSquare, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              최신 의료 시설을 갖춘<br />
              프리미엄 메디컬 빌딩
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              편리한 접근성과 최신 시설을 갖춘 진호 메디컬 빌딩에서<br />
              성공적인 의료 서비스를 시작하세요.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                연락하기
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/inquiries">
                  문의하기
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-lg">
                {/* 이미지 추가 예정 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      title: "최신 의료 시설",
      description: "최신 의료 장비 설치가 가능한 넓은 공간과 전문적인 시설 인프라를 제공합니다."
    },
    {
      title: "편리한 접근성",
      description: "지하철역과 가까우며, 넓은 주차장을 갖추고 있어 방문이 편리합니다."
    },
    {
      title: "쾌적한 환경",
      description: "중앙 공조 시스템과 철저한 소독 관리로 청결하고 쾌적한 환경을 유지합니다."
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">시설 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TenantsPreviewSection() {
  const tenants = [
    { name: "하늘마음 정신건강의학과", specialty: "정신건강의학과", floor: 3 },
    { name: "맑은눈 안과", specialty: "안과", floor: 4 },
    { name: "튼튼 정형외과", specialty: "정형외과", floor: 5 },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">입주 의료기관 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tenants.map((tenant, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tenant.name}</h3>
              <p className="text-gray-600 mb-2">{tenant.specialty}</p>
              <p className="text-gray-600">{tenant.floor}층</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/tenants">
              모든 의료기관 보기 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">문의하기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">이용 문의</h3>
            <p className="text-gray-600 mb-4">진호 메디컬 빌딩 이용에 관한 궁금한 점이 있으신가요?</p>
            <Button asChild>
              <Link href="/inquiries">
                이용 문의하기 <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">임대 문의</h3>
            <p className="text-gray-600 mb-4">진호 메디컬 빌딩에 입주를 고려중이신가요?</p>
            <Button asChild>
              <Link href="/inquiries">
                임대 문의하기 <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TenantsPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
