import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { generateToken } from '@/lib/auth/jwt';
import { handleApiRoute } from '@/lib/api/response';

export async function POST(request: Request) {
  return handleApiRoute(async () => {
    const body = await request.json();
    const { username, password } = body;
    
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다');
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      throw new Error('비밀번호가 일치하지 않습니다');
    }

    const token = generateToken(user.id);
    
    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    });

    return { success: true };
  });
}
