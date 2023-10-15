import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header className="text-5xl font-mono text-center">
        Welcome 
      </header>
      <h1 className = 'flex justify-center'>
        This is my online portfolio. It details my projects, both school and personal as well as my skills and experience.
      </h1>
      <div className="flex justify-center p-5">
        <Image
        src="/waldo.jpg"
        width={300}
        height={300}
        alt="A picture of me"
      />
      </div>
      
    </main>
  )
}
