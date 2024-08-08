import NextBreadcrumb from '@/component/NextBreadcrumb'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <NextBreadcrumb
          homeElement={'Home'}
          separator={<span> | </span>}
          activeClasses='text-amber-500'
          containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
          listClasses='hover:underline mx-2 font-bold'
          capitalizeLinks
      />
      {children}
      </body>
      </html>
  )
}
