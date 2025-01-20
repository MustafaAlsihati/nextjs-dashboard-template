// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import { localeConfig } from '@/tanslation/i18n';
import NextAuth from 'next-auth';
import createIntlMiddleware from 'next-intl/middleware';
import { authConfig } from './auth';

const { auth } = NextAuth(authConfig);

export default auth(request => {
  if (!request.auth) {
    const url = request.url.replace(request.nextUrl.pathname, '/');
    return Response.redirect(url);
  }
  return createIntlMiddleware({
    ...localeConfig,
  })(request);
});

export const config = { matcher: ['/dashboard/:path*'] };
