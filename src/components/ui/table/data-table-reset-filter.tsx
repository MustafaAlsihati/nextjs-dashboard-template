'use client';

import { Button } from '../button';

type DataTableResetFilterProps = {
  isFilterActive: boolean;
  onReset: () => void;
};

export function DataTableResetFilter({
  isFilterActive,
  onReset,
}: DataTableResetFilterProps) {
  if (!isFilterActive) return null;
  return (
    <Button variant="secondary" onClick={onReset}>
      Reset Filters
    </Button>
  );
}
