import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "./prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("이메일과 비밀번호를 입력해주세요.")
        }

        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email }
        })

        if (!admin) {
          throw new Error("등록되지 않은 관리자입니다.")
        }

        const isValid = await bcrypt.compare(credentials.password, admin.password)

        if (!isValid) {
          throw new Error("비밀번호가 일치하지 않습니다.")
        }

        return {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        }
      }
    })
  ],
  pages: {
    signIn: "/admin/auth/login",
  },
  session: {
    strategy: "jwt",
  },
}
