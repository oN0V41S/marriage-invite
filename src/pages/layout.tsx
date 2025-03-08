import styles from "@styles/globals.module.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={styles.html}>
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}
