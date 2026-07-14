import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* NAV */}
      <nav className={styles.nav}>
        <a href="#hero" className={styles.navBrand}>
          AKSHAT★SOMANI
        </a>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>
            ABOUT
          </a>
          <a href="#work" className={styles.navLink}>
            WORK
          </a>
          <a href="#contact" className={styles.navLink}>
            CONTACT
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="hero" className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={`${styles.heroSticker} ${styles.stickerPow}`} aria-hidden="true">
          POW!
        </div>
        <div className={`${styles.heroSticker} ${styles.stickerHuman}`} aria-hidden="true">
          100% HUMAN
        </div>
        <div className={`${styles.heroSticker} ${styles.stickerStar}`} aria-hidden="true">
          ★
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>PORTFOLIO ★ 2026</div>
          <h1 className={styles.heroName}>
            AKSHAT
            <br />
            SOMANI
          </h1>
          <p className={styles.heroTagline}>
            Product Manager building things at the intersection of broken &
            fun
          </p>
        </div>
      </header>

      {/* ABOUT ROW */}
      <div className={styles.bentoRow} id="about">
        <section className={styles.aboutPanel}>
          <div className={styles.aboutSticker}>PM BY DAY ★</div>
          <div className={styles.headshotFrame}>
            <Image
              src="/assets/headshot.jpeg"
              alt="Illustrated portrait of Akshat"
              width={736}
              height={736}
              className={styles.headshotImg}
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutHeading}>Hi, I&apos;m Akshat.</h2>
            <p className={styles.aboutBody}>
              APM by day. By night I&apos;m building <strong>DumbMoney</strong>{" "}
              — a coupon aggregator that actually works — and{" "}
              <strong>Embrace</strong>, a dating app concept that leads with
              personality, not photos.
            </p>
            <p className={styles.aboutBody}>
              I like products that are a little broken, a little fun, and a
              lot honest.
            </p>
          </div>
        </section>
        <section className={styles.shippingPanel}>
          <div className={styles.shippingGlyph} aria-hidden="true">
            ★
          </div>
          <div>
            <div className={styles.chipDark}>NOW SHIPPING</div>
            <h3 className={styles.shippingHeading}>CASE STUDIES</h3>
            <p className={styles.shippingBody}>
              Real PRDs, real teardowns, real shipped work. Scroll down or
              smash the button.
            </p>
          </div>
          <a href="#work" className={`${styles.button} ${styles.buttonPink}`}>
            SEE THE WORK ↓
          </a>
        </section>
      </div>

      {/* CASE STUDIES */}
      <div className={styles.bentoRow} id="work">
        <section className={styles.dumbMoneyPanel}>
          <div className={styles.dumbMoneyGlyph} aria-hidden="true">
            %
          </div>
          <div className={styles.shippedSticker}>SHIPPED ✓</div>
          <div className={styles.chipLight}>CASE STUDY 01</div>
          <h3 className={styles.dumbMoneyHeading}>
            Dumb
            <br />
            Money
          </h3>
          <p className={styles.dumbMoneyBody}>
            A coupon aggregator rebuilt from the ground up, SEO overhaul, UX
            teardown, and a search flow that finds the code before you give
            up.
          </p>
          <a href="#" className={`${styles.button} ${styles.buttonYellow}`}>
            VIEW CASE STUDY →
          </a>
        </section>
        <div className={styles.rightCol}>
          <section className={styles.embracePanel}>
            <div className={styles.embraceGlyph} aria-hidden="true">
              ♥
            </div>
            <div className={styles.inProgressSticker}>IN PROGRESS</div>
            <div className={styles.chipOutline}>CASE STUDY 02</div>
            <h3 className={styles.embraceHeading}>Embrace</h3>
            <p className={styles.embraceBody}>
              A personality-first dating app concept. Profiles open with how
              you think, not how you look.
            </p>
            <a href="#" className={`${styles.button} ${styles.buttonCream}`}>
              VIEW CASE STUDY →
            </a>
          </section>
          <section className={styles.blogPanel}>
            <div className={styles.blogGlyph} aria-hidden="true">
              &rdquo;
            </div>
            <div className={styles.newPostSticker}>NEW POST ★</div>
            <h3 className={styles.blogHeading}>Thoughts &amp; Writing</h3>
            <p className={styles.blogBody}>Read the blogs here</p>
            <a href="#" className={`${styles.button} ${styles.buttonCobalt}`}>
              READ THE BLOG →
            </a>
          </section>
        </div>
      </div>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerStar} aria-hidden="true">
          ★
        </div>
        <div className={styles.hireSticker}>HIRE ME?</div>
        <h2 className={styles.footerHeading}>
          Let&apos;s make something dumb &amp; fun.
        </h2>
        <p className={styles.footerBody}>
          Always up to talk products, PRDs, or bad ideas with potential.
        </p>
        <div className={styles.footerButtons}>
          <a
            href="https://www.linkedin.com/in/akshatsomani"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.footerButton} ${styles.buttonLinkedin}`}
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/SeRJ02"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.footerButton} ${styles.buttonGithub}`}
          >
            GITHUB
          </a>
          <a
            href="mailto:somaniaksha002@gmail.com"
            className={`${styles.footerButton} ${styles.buttonEmail}`}
          >
            EMAIL
          </a>
        </div>
        <p className={styles.copyright}>
          © 2026 AKSHAT SOMANI · DRAWN, INKED &amp; SHIPPED BY HAND
        </p>
      </footer>
    </div>
  );
}
