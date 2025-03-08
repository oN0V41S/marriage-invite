import styles from "../styles/home.module.scss";
import Link from "next/link";
import Image from 'next/image';
import Letter from "../../public/letter.jpg"

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Clique no Envelope Abaixo!!</h1>
      <Link href={"/invite"} className={styles.link}>
        <Image src={Letter} alt="Envelope" className={styles.img}/>  
      </Link>
    </div>
  );
}
