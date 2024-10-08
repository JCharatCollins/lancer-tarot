'use client'

import { Arimo } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";

const inter = Arimo({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Sidebar />
      </body>
    </html>
  );
}
