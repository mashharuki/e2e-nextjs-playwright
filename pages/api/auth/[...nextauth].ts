import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import prisma from '../../../lib/prisma'

/**
 * NextAuth の設定ファイル
 */
export const authOptions: NextAuthOptions = {
  // Prisma アダプターの設定
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth プロバイダーの設定
    // GitHub 認証を使用する場合の設定
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
}
export default NextAuth(authOptions)
