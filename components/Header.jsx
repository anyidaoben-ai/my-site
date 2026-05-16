// components/Header.jsx
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      {/* ── 左上：ロゴ ───────────────────── */}
      <a href="#home" className={styles.logoArea}>
        <Image
          id="home"
          src="/images/shokujibaicon.jpeg"
          alt="Royal Kitchen ロゴ"
          width={48}
          height={48}
          className={styles.logoImage}
        />
        
      </a>

      {/* ── 右上：タブナビゲーション ────────── */}
      <nav>
       <ul className={styles.headtag}>
        <li><a href="#home" className={`${styles.navLink} ${styles.navLinkActive}`}>Dispens</a></li>
        <li><a href="#menu" className={styles.navLink}></a></li>
        <li><a href="#paradise" className={styles.navLink}></a></li>
        <li><a href="#hisotory" className={styles.navLink}>楽しむ</a></li>
        </ul>
      </nav>

    </header>
  );
}