import { auth } from '@/auth';
import Providers from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { data } from '@/constants/data';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import '../globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  const session = await auth();
  return (
    <html
      lang={locale}
      className={`${lato.className}`}
      suppressHydrationWarning={true}>
      <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false} />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers session={session}>
            <Toaster />
            {children}
          </Providers>
        </NextIntlClientProvider>
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
