import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
        <div>logo</div>
        <nav>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </nav>
    </header> 
  )
};