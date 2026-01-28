import type { Metadata, Viewport } from "next"
import { Merriweather, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Clearwater Properties | Local Living",
  description:
    "We manage real apartments, houses, and local business spaces in Detroit & Dearborn, MI. Simple, honest renting with a focus on community and reliable service.",
}

export const viewport: Viewport = {
  themeColor: "#fdfcf8",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${jakarta.variable} antialiased selection:bg-orange-100 selection:text-orange-900 font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
