import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicThemeSwitcher = dynamic(() => import('../themeSwitcher/ThemeSwitcher'), {
    ssr: false,
  });

export default function Header() {
  return (
    <header>
        <div>logo</div>
        <nav>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </nav>
        <DynamicThemeSwitcher />
    </header> 
  )
};