import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: 'LANCER Tarot | READINGS',
    description: 'Learn your fate as a member of the Shuffle Alliance.',
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