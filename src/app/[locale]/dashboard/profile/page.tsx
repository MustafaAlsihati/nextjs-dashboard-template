import ProfileViewPage from '@/features/profile/profile-view-page';
import type { Metadata } from 'next';

export default async function Page() {
  return <ProfileViewPage />;
}

export const metadata: Metadata = {
  title: 'Profile',
};
