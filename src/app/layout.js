import { Nunito_Sans } from 'next/font/google'
import '../style/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['300','600','800'] })

export const metadata = {
  title: 'Countries App',
  description: 'Search countries and see details',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.className} bg-very-light-gray-bg-light text-very-dark-blue-text-light dark:bg-very-dark-blue-bg-dark dark:text-white-text-dark`}>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
        </body>
    </html>
  )
}
