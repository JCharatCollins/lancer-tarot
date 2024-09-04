import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LANCER Tarot',
  description: 'Home of the Shuffle Alliance, 22 LANCER Pilots based on the Major Arcana of the Rider-Waite Tarot.',
}

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h3>
          Please welcome...
        </h3>
        <h1>
          THE SHUFFLE ALLIANCE
        </h1>
        <h2>
          A set of 22 pilots created for the LANCER SYSTEM based on the Major Arcana of the Rider-Waite tarot deck.
        </h2>
      </div>
      <div className={styles.panel}>
        <h2>
          WHAT IS TAROT?
        </h2>
        <div className={styles.panelText}>
          <p>
            Tarot cards were originally used much as &quot;normal&quot; playing cards are today;
            that is, to play card games. They later began to develop various spiritual meanings through
            the work of &quot;scholars&quot; such as Dr. Arthur Edward Waite, whose work in the late 19th
            and early 20th centuries solidified the ideas behind Tarot cards as tools for fortune-telling and
            other occult purposes.
          </p>
        </div>
      </div>
    </main>
  );
}
