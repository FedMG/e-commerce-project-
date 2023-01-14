import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// WARNING: string assertions on providers
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ]
}

export default NextAuth(authOptions)
