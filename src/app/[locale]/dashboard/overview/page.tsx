import OverViewPage from '@/features/overview/overview';
import { Metadata } from 'next';

export default function Page() {
  return <OverViewPage />;
}

export const metadata: Metadata = {
  title: 'Overview',
};
