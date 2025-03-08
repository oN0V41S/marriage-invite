import type { Metadata } from "next";
import styles from "@/app/globals.module.scss";

const metadata: Metadata = {
  title: "Clarice & Ailton",
  description: "Você está convidado para prestigiar o nosso casamento!!",
};

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
