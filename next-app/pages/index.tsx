import Image from 'next/image'
import { Raleway, Merriweather_Sans, Lora } from "@next/font/google";

export const raleway = Raleway({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const merriweather = Merriweather_Sans({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-merriweather',
  subsets: ['latin'],
});

export const lora = Lora({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lora',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main
      className={` min-h-screen ${raleway.variable} ${merriweather.variable} ${lora.variable}`}
    >
      <h1 className="font-merriweather">rrrrrr dfdfdeii</h1>
    </main>
  )
}
