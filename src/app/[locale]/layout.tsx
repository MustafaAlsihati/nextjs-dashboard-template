import { auth } from '@/auth';
import Providers from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { data } from '@/constants/data';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import '../globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${lato.className}`}
      suppressHydrationWarning={true}>
      <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: data.appName,
    template: `%s | ${data.appName}`,
  },
  description: data.appDescription,
};
