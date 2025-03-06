import styles from "../styles/home.module.scss";
import Link from "next/link";
// import Image from 'next/image';
// import Letter from "../../public/images/letter.png"

export default function Home() {
  return (
    <div className={styles.content}>
      <Link href={"/adminstration"}>
      Hello virgens
        {/* <Image src={Letter} alt="Envelope" width={120} height={120}/>   */}
      </Link>
    </div>
  );
}
