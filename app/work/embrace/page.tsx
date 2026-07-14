import Link from "next/link";
import styles from "./detail.module.css";

export default function Embrace() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <Link href="/work" className={styles.backLink}>
            ← BACK TO WORK
          </Link>
          <h1 className={styles.title}>Embrace PRD</h1>
        </div>
        <a
          href="/case-studies/embrace-prd.pdf"
          download
          className={styles.downloadLink}
        >
          DOWNLOAD PDF ↓
        </a>
      </div>
      <div className={styles.embedWrap}>
        <embed
          src="/case-studies/embrace-prd.pdf"
          type="application/pdf"
          className={styles.embed}
        />
      </div>
    </div>
  );
}
