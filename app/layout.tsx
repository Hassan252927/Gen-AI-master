import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/component/Sidebar";
import Provider from "./Provider";
import NextLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import BottomBar from "@/components/component/BottomBar";
import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-pr-7">
      <body className={inter.className}>
        <Provider>
          <NextLoader
            color="white"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
          />
          <Toaster />
          <div className="flex max-sm:pb-[60px]">
            <Sidebar />
            <BottomBar />
            <main className="flex-grow">
              <Navbar />
              <div className="p-6">{children}</div>
              <Footer />
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
