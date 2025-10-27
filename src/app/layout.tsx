import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Crude Capital",
  description: "Payment infrastructure advisory for sophisticated operators",
  openGraph: {
    title: "Crude Capital",
    description: "Payment infrastructure advisory for sophisticated operators",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}