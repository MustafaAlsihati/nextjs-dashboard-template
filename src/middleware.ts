// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import { localeConfig } from '@/tanslation/i18n';
import NextAuth from 'next-auth';
import createIntlMiddleware from 'next-intl/middleware';
import { authConfig } from './auth';
import { NextRequest } from 'next/server';

const publicPages = ['/', '/signin', '/signup', '/signup(/.*)?'];

const { auth } = NextAuth(authConfig);
const intlMiddleware = createIntlMiddleware(localeConfig);

const authMiddleware = auth(request => {
  if (!request.auth) {
    const url = request.url.replace(request.nextUrl.pathname, '/');
    return Response.redirect(url);
  }
  return createIntlMiddleware(localeConfig)(request);
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${localeConfig.locales.join('|')}))?(${publicPages
      .flatMap(p => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i',
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
