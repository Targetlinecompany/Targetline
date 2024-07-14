import { PhoneIcon } from 'lucide-react';
import { BiHomeAlt } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { LuPen } from 'react-icons/lu';

export const navigation = [
  {
    name: 'Services',
    href: '#',
    dropdownItems: [
      { name: 'Increase sales', href: '/services/increase-sales' },
      { name: 'Website design', href: '/services/website-design' },
      { name: 'App design', href: '/services/app-design' },
    ],
  },
  {
    name: 'Membership',
    href: '/membership',
    current: true,
  },
  { name: 'About us', href: '/about' },
];
export const sidebarEditProfile = [
  {
    icon: BiHomeAlt,
    name: 'Home',
    link: '/profile/home',
  },
  {
    icon: LuPen,
    name: 'Edit Profile',
    link: '/profile/edite-profile',
  },
  {
    icon: CiSettings,
    name: 'Appearace',
    link: '/profile/appearace',
  },
  {
    icon: IoIosHelpCircleOutline,
    name: 'Help',
    link: '/profile/help',
  },
];
