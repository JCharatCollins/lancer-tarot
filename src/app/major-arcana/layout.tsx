import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: 'LANCER Tarot | MAJOR ARCANA',
  description: 'View all 22 leaders of the Shuffle Alliance.',
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