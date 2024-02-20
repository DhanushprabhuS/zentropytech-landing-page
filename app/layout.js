import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zentropy :: Finance | Technology | Data Science',
  description: `Zentropy Technologies is a data science and engineering company that aims to disrupt financial 
  services like automated trading, portfolio management, crypto trading 
  and blockchain using latest big data technologies, machine learning 
  and advanced analytics.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
