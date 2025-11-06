import { WaitlistForm } from "./_components/waitlist-form";
import styles from "./page.module.css";

const featureList = [
  {
    title: "Orchestration Workbench",
    copy:
      "Design and iterate on cross-functional journeys with a shared canvas that keeps teams aligned in real time.",
  },
  {
    title: "Temporal Insights",
    copy:
      "Model moments that matter with predictive signals so you can act before decisions fall through the cracks.",
  },
  {
    title: "Adaptive Playbooks",
    copy:
      "Automate the liminal space between workflows with context-aware automations that evolve alongside your team.",
  },
  {
    title: "Enterprise-Grade Privacy",
    copy:
      "Bring your own trust perimeter. Liminal ships with compliant infrastructure, audit trails, and granular governance.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={`${styles.shell} ${styles.header}`}>
        <span className={styles.logo}>Liminal</span>
        <nav className={styles.nav}>
          <a href="#vision">Vision</a>
          <a href="#features">Product</a>
          <a href="#cta">Request Access</a>
        </nav>
      </header>

      <main>
        <section className={`${styles.shell} ${styles.hero}`}>
          <div>
            <div className={styles.pill}>
              <span>Launching Soon</span>
              <span>•</span>
              <span>Early Access</span>
            </div>
            <h1 className={styles.heroTitle}>
              Navigating the <span className={styles.heroAccent}>threshold</span> between ideas and
              impact.
            </h1>
            <p className={styles.heroText}>
              Liminal helps product, design, and strategy teams move from ambiguous intent to
              coordinated execution. Shape narratives, orchestrate decisions, and steward change in
              the spaces where momentum usually stalls.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="#cta">
                Request Access
              </a>
              <a className={styles.buttonGhost} href="#features">
                Explore Product
              </a>
            </div>
          </div>
          <aside className={styles.statPanel}>
            <span className={styles.statLabel}>Moments steered</span>
            <span className={styles.statValue}>3.2M+</span>
            <p className={styles.heroText}>
              Teams trust Liminal to capture, resolve, and elevate the decisions that shape their
              next chapter.
            </p>
          </aside>
        </section>

        <hr className={styles.divider} />

        <section id="vision" className={`${styles.shell} ${styles.mission}`}>
          <h2 className={styles.missionHeading}>
            We engineer clarity for the spaces between before and after.
          </h2>
          <p className={styles.missionText}>
            Liminal understands that progress rarely follows a straight line. Our platform maps the
            in-between: the approvals, the boundary moments, the fragile alliances, and the turning
            points that determine whether an idea becomes a reality. We unite these signals into a
            living operating system, so your team stays poised, perceptive, and prepared.
          </p>
        </section>

        <section id="features" className={`${styles.shell} ${styles.features}`}>
          {featureList.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.copy}</p>
            </article>
          ))}
        </section>

        <section id="cta" className={`${styles.shell} ${styles.cta}`}>
          <h2 className={styles.ctaTitle}>Step beyond the threshold.</h2>
          <p className={styles.ctaText}>
            Join the early access cohort to co-create the future of liminal operations. We onboard a
            limited set of teams each month to ensure a guided, high-impact rollout experience.
          </p>
          <WaitlistForm className={styles.heroActions} buttonClassName={styles.buttonPrimary} />
        </section>
      </main>

      <footer className={`${styles.shell} ${styles.footer}`}>
        <span>© {new Date().getFullYear()} Liminal Labs, Inc.</span>
        <div className={styles.footerLinks}>
          <a href="#vision">Vision</a>
          <a href="#features">Product</a>
          <a href="mailto:hello@weareliminal.com">Contact</a>
        </div>
      </footer>
    </div>
  );
}
