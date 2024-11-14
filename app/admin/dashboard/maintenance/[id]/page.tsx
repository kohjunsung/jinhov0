"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MaintenanceConfirmForm from "../components/maintenance-confirm-form"
import { Metadata } from 'next'

interface PageProps {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

//@ts-nocheck
export default async function AdminMaintenanceDetailPage({ params }: { params: {id: string };}) {
  const payment = {
    id: 1,
    tenant: "하늘마음 정신건강의학과",
    amount: 450000,
    month: "2024년 3월",
    dueDate: "2024-04-15",
    status: "대기중",
    floor: 3,
    details: {
      electricity: 250000,
      water: 50000,
      gas: 80000,
      cleaning: 70000
    }
  }

  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Link href="/admin/dashboard/maintenance">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">관리비 상세</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>임차인 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500">임차인</dt>
                <dd className="text-lg font-medium">{payment.tenant}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">층</dt>
                <dd className="text-lg font-medium">{payment.floor}층</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>청구 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500">청구 월</dt>
                <dd className="text-lg font-medium">{payment.month}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">납부 기한</dt>
                <dd className="text-lg font-medium">{payment.dueDate}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">상태</dt>
                <dd>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    payment.status === "완료" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {payment.status}
                  </span>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>관리비 상세 내역</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500">전기료</p>
                <p className="text-lg font-medium">{payment.details.electricity.toLocaleString()}원</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">수도료</p>
                <p className="text-lg font-medium">{payment.details.water.toLocaleString()}원</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">가스비</p>
                <p className="text-lg font-medium">{payment.details.gas.toLocaleString()}원</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">청소비</p>
                <p className="text-lg font-medium">{payment.details.cleaning.toLocaleString()}원</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">총 금액</p>
                <p className="text-xl font-bold">{payment.amount.toLocaleString()}원</p>
              </div>
              {payment.status !== "완료" && (
                <MaintenanceConfirmForm maintenanceId={params.id} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}