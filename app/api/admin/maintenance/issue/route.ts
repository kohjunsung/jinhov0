import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import prisma from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const maintenancePayment = await prisma.maintenance.update({
      where: { id: Number(params.id) },
      data: { 
        status: "완료",
        paymentDate: new Date()
      }
    })

    return NextResponse.json(maintenancePayment)
  } catch (error) {
    console.error("[MAINTENANCE_CONFIRM]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}