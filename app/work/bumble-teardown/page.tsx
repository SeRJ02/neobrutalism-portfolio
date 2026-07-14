import Link from "next/link";
import styles from "./detail.module.css";

export default function BumbleTeardown() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Link href="/work" className={styles.backLink}>
          ← BACK TO WORK
        </Link>
        <h1 className={styles.title}>Bumble Teardown</h1>
      </div>
      <div className={styles.iframeWrap}>
        <iframe
          src="/case-studies/bumble-teardown.html"
          title="Bumble Teardown case study"
          className={styles.iframe}
        />
      </div>
    </div>
  );
}
