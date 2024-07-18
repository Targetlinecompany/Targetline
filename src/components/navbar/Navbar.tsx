'use client';
import { useState } from 'react';

import MainNavbar from './MainNavbar';
import MobileSidebar from './MobileSidebar';
import { navigation } from '../../lib/data';

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div id='navbar' className='absolute w-full z-50'>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
      />
      <MainNavbar navigation={navigation} setSidebarOpen={setSidebarOpen} />
    </div>
  );
}
