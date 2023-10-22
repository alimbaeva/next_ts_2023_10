import React, { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [isLight, setIsLight] = 
    useState<boolean | null>(
      localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme") as string) : true
    ); 

  const setLightTheme = () => {
    setIsLight(true);
    localStorage.setItem('theme', JSON.stringify(true));
  };

  const setDarkTheme = () => {
    setIsLight(false);
    localStorage.setItem('theme', JSON.stringify(false));
  };

  useEffect(() => {
    const setTheme = () => {
      const root = window.document.documentElement;
      const operatingSystemThemeDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      if (!isLight && operatingSystemThemeDark.matches) {
        root.classList.add('dark');
      }
      if (!isLight) {
        root.classList.add('dark');
      }
      if (isLight) {
        root.classList.remove('dark');
      }
    };
    setTheme();
    console.log(`${isLight} selected`);
  }, [isLight]);

  return (
    <div className='theme-switcher items-center ml-12'>
      <button
        type='button'
        className={`dark-mode-switch cursor-pointer mr-6 w-[40px] h-[40px] p-[10px] rounded-[100%]
        border ${!isLight && 'hidden'}`}
        onClick={setDarkTheme}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width="20"
          // height="20"
          fill='currentColor'
          className='bi bi-moon-stars-fill w-[18px] h-[18px]'
          viewBox='0 0 16 16'
        >
          <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
          <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
        </svg>
      </button>
      <button
        type='button'
        className={`light-mode-switch cursor-pointer mr-6 w-[40px] h-[40px] p-[10px] rounded-[100%]
        border ${isLight && 'hidden'}`}
        onClick={setLightTheme}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width="20"
          // height="20"
          fill='currentColor'
          className='bi bi-brightness-high w-[18px] h-[18px]'
          viewBox='0 0 16 16'
        >
          <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
        </svg>
      </button>
    </div>
  );
}