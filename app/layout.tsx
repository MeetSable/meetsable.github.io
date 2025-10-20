import type { Metadata } from "next";
import "./globals.css";
import Contacts from "./componenets/Contacts";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A statically exported Next.js portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display">
        <Contacts/>
        {children}
        </body>
    </html>
  );
}