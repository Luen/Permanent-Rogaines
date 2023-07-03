import './globals.css'
import Navbar from './components/Navbar'
import Logo from './components/Logo'

export const metadata = {
  title: "Permanent Rogaine Courses",
  description: 'Permanent Rogaine Courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <Logo />
        {children}
      </body>
    </html>
  )
}
