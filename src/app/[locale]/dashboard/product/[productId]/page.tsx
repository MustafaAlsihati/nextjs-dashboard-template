import FormCardSkeleton from '@/components/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import ProductViewPage from '@/features/products/product-view-page';
import { Metadata } from 'next';
import { Suspense } from 'react';

interface Props {
  params: Promise<{
    productId: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { productId } = await params;
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <Suspense fallback={<FormCardSkeleton />}>
          <ProductViewPage productId={productId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}

export const metadata: Metadata = {
  title: 'Product View',
};
