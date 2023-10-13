import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valli Portfolio',
  description: 'My portfolio website',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-mono">
      <head />
      <body>
        <div className='bg-gray-700'>
          <div className='grid grid-cols-4 justify-items-center'>
              <Link href="/" className='p-2 bg-gray-700  hover:bg-gray-800' >Home</Link>
              <Link href="/projects" className='p-2 bg-gray-700  hover:bg-gray-800'>Projects</Link> 
              <Link href="/about" className='p-2 bg-gray-700  hover:bg-gray-800'>About me</Link>  
              <Link href="/contact" className='p-2 bg-gray-700  hover:bg-gray-800'>Contact</Link>    
          </div>
        </div>
      {children}
      </body>
    </html>
  )
}
