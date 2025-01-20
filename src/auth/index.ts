import { fetchUser } from '@/auth/auth.actions';
import NextAuth from 'next-auth';
import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const user = session?.user;
      if (user && !('id' in user)) {
        (session.user as any).id = token.id;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {
          type: 'email',
        },
        // password: {
        //   type: 'password',
        // },
      },
      async authorize(credentials) {
        return fetchUser(credentials);
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
} satisfies NextAuthConfig;

export const { auth, handlers } = NextAuth(authConfig);
