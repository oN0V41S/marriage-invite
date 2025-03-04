import styles from "./globals.modules.css"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (  
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Clarice && Adilson</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}