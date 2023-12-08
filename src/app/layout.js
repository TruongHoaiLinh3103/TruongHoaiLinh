import { Inter } from 'next/font/google'
import "../styles/App.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trương Hoài Linh',
  description: 'A Frontend Deverloper',
  openGraph: {
    title: "Trương Hoài Linh",
    description: "A Frontend Deverloper ♥️ ♥️ ♥️ ",
    type: "website",
    author: ["Trương Hoài Linh", "Anikey"],
    images: ["https://i.pinimg.com/originals/5a/47/61/5a47614d077f48946cb7f5313ce72eac.jpg",]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
