import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { handleApiRoute } from "@/lib/api/response";

export async function POST(request: Request) {
  return handleApiRoute(async () => {
    const body = await request.json();
    
    // 필수 필드 검증
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "제목과 내용은 필수입니다." },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        title: body.title,
        content: body.content
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: inquiry 
    });
  });
}

export async function GET() {
  return handleApiRoute(async () => {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    
    return NextResponse.json(inquiries);
  });
}