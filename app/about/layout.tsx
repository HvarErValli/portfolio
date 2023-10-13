export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <nav>
                About navigation
            </nav>
            <main>
                {children}
            </main>
        </>
  )
}
