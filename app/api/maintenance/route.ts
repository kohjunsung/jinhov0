import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { handleApiRoute } from "@/lib/api/response";

export async function GET() {
  return handleApiRoute(async () => {
    const maintenance = await prisma.maintenance.findMany({
      orderBy: {
        month: "desc"
      }
    });
    
    return maintenance.map(item => ({
      ...item,
      amount: `${item.amount.toLocaleString()}원`,
      paymentDate: item.paymentDate ? new Date(item.paymentDate).toLocaleDateString() : null,
      status: item.status === "completed" ? "완료" : "대기중"
    }));
  });
}

export async function POST(request: Request) {
  return handleApiRoute(async () => {
    const body = await request.json();
    const maintenance = await prisma.maintenance.create({
      data: body
    });
    return { success: true, data: maintenance };
  });
}
