import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: 'LANCER Tarot | READINGS',
    description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}