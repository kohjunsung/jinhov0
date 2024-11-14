import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { handleApiRoute } from "@/lib/api/response";

export async function GET() {
  return handleApiRoute(async () => {
    const contracts = await prisma.contract.findMany({
      orderBy: {
        id: "desc"
      }
    });
    
    return contracts;
  });
}

export async function POST(request: Request) {
  return handleApiRoute(async () => {
    const body = await request.json();
    const { period, rent, deposit, status, notes } = body;
    
    const contract = await prisma.contract.create({
      data: {
        period,
        rent,
        deposit,
        status,
        notes
      }
    });

    return { success: true, data: contract };
  });
}
