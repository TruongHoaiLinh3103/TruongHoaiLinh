export const metadata = {
    title: 'Home',
    description: 'A Frontend Deverloper',
    openGraph: {
      title: "Home",
      description: "A Frontend Deverloper ♥️ ♥️ ♥️ ",
      type: "website",
      author: ["Trương Hoài Linh", "Anikey"],
      images: ["https://i.pinimg.com/originals/5a/47/61/5a47614d077f48946cb7f5313ce72eac.jpg",]
    },
  }
  
  export default function RootLayout({ children }) {
    return (
      <>
          {children}
      </>
    )
  }
  