import EmployeeViewPage from '@/features/employees/employee-view-page';
import type { Metadata } from 'next';

export default function Page() {
  return <EmployeeViewPage />;
}

export const metadata: Metadata = {
  title: 'Employee View',
};
