'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function PhoneSignInButton() {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      // onClick={() =>
      //   signIn('phone', { callbackUrl: callbackUrl ?? '/dashboard' })
      // }
    >
      <Icons.phone className="mr-2 h-4 w-4" />
      Continue with Phone Number
    </Button>
  );
}
