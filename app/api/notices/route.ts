import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { handleApiRoute } from "@/lib/api/response";

export async function GET() {
  return handleApiRoute(async () => {
    const notices = await prisma.notice.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    
    return notices;
  });
}

export async function POST(request: Request) {
  return handleApiRoute(async () => {
    const body = await request.json();
    const { title, content } = body;
    
    const notice = await prisma.notice.create({
      data: {
        title,
        content
      }
    });

    return { success: true, data: notice };
  });
}
