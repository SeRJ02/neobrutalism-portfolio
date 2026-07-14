import Link from "next/link";
import homeStyles from "../page.module.css";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  return (
    <div className={homeStyles.container}>
      {/* NAV */}
      <nav className={homeStyles.nav}>
        <Link href="/" className={homeStyles.navBrand}>
          AKSHAT★SOMANI
        </Link>
        <div className={homeStyles.navLinks}>
          <Link href="/#about" className={homeStyles.navLink}>
            ABOUT
          </Link>
          <Link href="/work" className={homeStyles.navLink}>
            WORK
          </Link>
          <Link href="/#contact" className={homeStyles.navLink}>
            CONTACT
          </Link>
        </div>
      </nav>

      {/* COMING SOON HERO */}
      <header className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={styles.sticker} aria-hidden="true">
          POW!
        </div>
        <div className={`${styles.sticker} ${styles.stickerStar}`} aria-hidden="true">
          ★
        </div>
        <div className={styles.inner}>
          <div className={styles.tag}>WORK IN PROGRESS</div>
          <h1 className={styles.title}>Coming Soon</h1>
          <p className={styles.body}>
            This one&apos;s still in the oven. Check back soon.
          </p>
          <div className={styles.backLinks}>
            <Link
              href="/work"
              className={`${homeStyles.button} ${homeStyles.buttonCream}`}
            >
              ← BACK TO WORK
            </Link>
            <Link
              href="/"
              className={`${homeStyles.button} ${homeStyles.buttonYellow}`}
            >
              ← BACK HOME
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
