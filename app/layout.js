import './globals.css'

export const metadata = {
  title: 'Hugo Pottier - Portfolio',
  description: 'UI/UX Designer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-cream">{children}</body>
    </html>
  )
}
