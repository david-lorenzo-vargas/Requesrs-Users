import Header from "@/app/Components/Molecules/Header";
import "./globals.css";

export const metadata = {
  title: 'Requesrs',
  description: 'Requesrs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-40">
          {children}
        </div>
      </body>
    </html>
  )
}
