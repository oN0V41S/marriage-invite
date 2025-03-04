import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className="text-4xl font-bold text-blue-600">Hello Kelly!</h1>
      <p className="mt-4 text-gray-600">Welcome to your Next.js app with Tailwind CSS</p>
    </div>
  );
}
