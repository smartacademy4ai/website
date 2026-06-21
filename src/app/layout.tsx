import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Mentor — Creiamo i lavori del futuro",
    template: "%s | Mentor",
  },
  description:
    "Scuola tecnico-pratica nel Sud Italia. Percorsi in Python, AI e Robotica. Mentorship reale, progetti concreti, certificazioni spendibili.",
  keywords: ["programmazione", "intelligenza artificiale", "robotica", "formazione", "sud italia", "corsi tech"],
  openGraph: {
    title: "Mentor — Creiamo i lavori del futuro",
    description:
      "Scuola tecnico-pratica nel Sud Italia. Percorsi in Python, AI e Robotica.",
    type: "website",
    locale: "it_IT",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
