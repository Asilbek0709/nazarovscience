import "./globals.css";
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],      // поддерживаемые символы
  weight: ['400', '600', '700'],  // Regular, Medium, Bold
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
