import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'da', 'pa'];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
