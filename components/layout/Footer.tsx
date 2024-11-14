import { Building } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">진호 메디컬 빌딩</h3>
            <p className="text-gray-400">최신 의료 시설과 편리한 접근성을 갖춘 프리미엄 메디컬 빌딩입니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <p className="text-gray-400">전화: 02-123-4567</p>
            <p className="text-gray-400">이메일: info@jinhomedical.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">주소</h3>
            <p className="text-gray-400">서울특별시 강남구 테헤란로 123</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
