import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import ProductListingPage from '@/features/products/product-listing';
import ProductTableAction from '@/features/products/product-tables/product-table-action';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SearchParams } from 'nuqs';
import { Suspense } from 'react';

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: Props) {
  const _searchParams = await searchParams;
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(_searchParams);
  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ..._searchParams });
  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Products"
            description="Manage products (Server side table functionalities.)"
          />
          <Link
            href="/dashboard/product/new"
            className={cn(buttonVariants(), 'text-xs md:text-sm')}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <ProductTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
          <ProductListingPage />
        </Suspense>
      </div>
    </PageContainer>
  );
}

export const metadata: Metadata = {
  title: 'Products',
};
