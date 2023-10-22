import { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function MainLayout({ children}: {children: ReactNode}) {
  return (
    <div className="text--colors_default bg--default">
      <Header />
      <main className="m-auto w-1200">
        {children}
	    </main>
      <Footer />
    </div>
  )
}