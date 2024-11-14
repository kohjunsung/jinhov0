import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { handleApiRoute } from "@/lib/api/response";

export async function GET() {
  return handleApiRoute(async () => {
    const rentPayments = await prisma.rentPayment.findMany({
      orderBy: {
        dueDate: "desc"
      }
    });
    
    return rentPayments.map(payment => ({
      ...payment,
      amount: `${payment.amount.toLocaleString()}원`,
      dueDate: new Date(payment.dueDate).toLocaleDateString(),
      paymentDate: payment.paymentDate ? new Date(payment.paymentDate).toLocaleDateString() : null,
      status: payment.status === "completed" ? "완료" : "대기중"
    }));
  });
}

export async function POST(request: Request) {
  return handleApiRoute(async () => {
    const body = await request.json();
    const payment = await prisma.rentPayment.create({
      data: body
    });
    return { success: true, data: payment };
  });
}
