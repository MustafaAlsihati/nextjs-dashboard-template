import EmployeeListingPage from '@/features/employees/employee-listing-page';
import { searchParamsCache } from '@/lib/searchparams';
import type { Metadata } from 'next';
import { SearchParams } from 'nuqs';

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: Props) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(await searchParams);
  return <EmployeeListingPage />;
}

export const metadata: Metadata = {
  title: 'Employees',
};
