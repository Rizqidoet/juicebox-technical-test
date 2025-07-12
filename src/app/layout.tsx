import type { Metadata } from "next";
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Juicebox 2024 - Technical",
  description: "Technical Assignment Homepage",
};

export default function RootLayout({
  children,
}: {
   children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
