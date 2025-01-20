"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useLanguage = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLanguage = (newLanguage?: "ar" | "en") => {
    const oldLocale = locale;
    const newLocale = newLanguage ?? (locale === "en" ? "ar" : "en");
    let newPath = pathname.replace(`/${oldLocale}/`, `/${newLocale}/`);
    if (searchParams.size > 0) {
      newPath += `?${searchParams.toString()}`;
    }
    router.push(newPath);
  };

  const dir: "rtl" | "ltr" = useMemo(
    () => (locale === "ar" ? "rtl" : "ltr"),
    [locale],
  );

  return { language: locale as "ar" | "en", setLanguage, dir };
};
