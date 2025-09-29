import React from "react";

export const metadata = {
    title: "meet.shell",
    description: "learning github pages"
}

export default function RootLayout({ children, } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}