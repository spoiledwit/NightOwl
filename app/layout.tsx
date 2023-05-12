import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({weight:['400', '600', '700', '800', '900', '500'], subsets:['latin']});

export const metadata = {
  title: 'Night Owl',
  description: 'Neon-drenched communication for the 21st century.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        <ToasterContext />
        {children}        
        </AuthContext>
        </body>
    </html>
  )
}
