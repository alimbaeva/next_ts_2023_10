import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicThemeSwitcher = dynamic(() => import('../themeSwitcher/ThemeSwitcher'), {
    ssr: false,
  });

export default function Header() {
  return (
    <header className="h-24 flex-cente">
      <div className="m-auto w-1200 flex-between">
        <div className="body">logo</div>
        <nav>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </nav>
        <DynamicThemeSwitcher />
      </div>
    </header> 
  )
};