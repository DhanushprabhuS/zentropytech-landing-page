import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zentropy :: Finance | Technology | Data Science',
  openGraph : {
    title: 'Zentropy Technologies',
    description: `Zentropy Technologies is a data science and engineering company that aims to disrupt financial 
    services like automated trading, portfolio management, crypto trading 
    and blockchain.`,
    images: '/lg-view.png',
  },
  description: `Zentropy Technologies is a data science and engineering company that aims to disrupt financial 
  services like automated trading, portfolio management, crypto trading 
  and blockchain.`,
  keywords: 'Automated Trading, Portfolio management, Crypto trading and block chain, Data Visualization, Data wearhouse, Data Science, Zentropy Technologies',
  images: '/lg-view.png'
}

//console.log('Welcome to .:| Zentropy Technologies |:.');

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
