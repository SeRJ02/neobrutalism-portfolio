import Link from "next/link";
import homeStyles from "../page.module.css";
import styles from "./work.module.css";

const caseStudies = [
  {
    slug: "bumble-teardown",
    chip: "CASE STUDY 01",
    title: "Bumble Teardown",
    description:
      "A product teardown of Bumble's onboarding and matching flow.",
    glyph: "B",
  },
  {
    slug: "embrace",
    chip: "CASE STUDY 02",
    title: "Embrace PRD",
    description:
      "Product requirements for Embrace, a personality-first dating app concept.",
    glyph: "♥",
  },
];

export default function Work() {
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

      {/* PAGE HEADER */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderTag}>PORTFOLIO ★ WORK</div>
        <h1 className={styles.pageHeaderTitle}>Case Studies</h1>
        <p className={styles.pageHeaderBody}>
          Real PRDs, real teardowns, real shipped work.
        </p>
      </header>

      {/* CARD GRID */}
      <div className={styles.cardGrid}>
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className={styles.card}
          >
            <div className={styles.cardGlyph} aria-hidden="true">
              {study.glyph}
            </div>
            <div className={styles.cardChip}>{study.chip}</div>
            <h2 className={styles.cardTitle}>{study.title}</h2>
            <p className={styles.cardBody}>{study.description}</p>
            <span className={styles.cardLink}>VIEW CASE STUDY →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
