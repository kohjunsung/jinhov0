'use server'

import prisma from "@/lib/prisma"

export async function saveInquiries(body:{content:string, title:string}) {
    const inquiry = await prisma.inquiry.create({
        data: {title: body.title, content: body.content}
      });
}