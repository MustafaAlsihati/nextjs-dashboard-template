'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { PopoverClose } from '@radix-ui/react-popover';
import { addDays, format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const onChangeDateTime = () => {
    let url = new URL(window.location.href);
    if (date?.from) {
      url.searchParams.set('from', date.from.toISOString());
    }
    if (date?.to) {
      url.searchParams.set('to', date.to.toISOString());
    }
    router.push(url.toString());
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[288px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')}
                  {' - '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto bg-card p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            max={365 * 3} // 3 years
          />
          <div className="flex w-full items-end justify-end p-4">
            <PopoverClose asChild>
              <Button variant="ghost">Cancel</Button>
            </PopoverClose>
            <div className="w-2" />
            <PopoverClose asChild>
              <Button onClick={onChangeDateTime}>Save</Button>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
