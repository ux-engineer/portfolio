import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX.Engineer · Janne Kurkinen',
  description: 'The portfolio site of Senior Web App Full Stack Developer & UI/UX Designer, Janne Kurkinen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
