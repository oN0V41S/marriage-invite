export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="trancy-pt antianalised">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}