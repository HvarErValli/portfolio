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
        <div className='bg-zinc-800'>
          <div className='grid grid-cols-4 justify-items-center'>
              <Link href="/" className='p-2 bg-zinc-800  hover:bg-zinc-900' >Home</Link>
              <Link href="/projects" className='p-2 bg-zinc-800  hover:bg-zinc-900'>Projects</Link> 
              <Link href="/about" className='p-2 bg-zinc-800  hover:bg-zinc-900'>About me</Link>  
              <Link href="/contact" className='p-2 bg-zinc-800  hover:bg-zinc-900'>Contact</Link>    
          </div>
        </div>
      {children}
      </body>
    </html>
  )
}
