import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LANCER Tarot',
  description: '...',
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
            Test
          </p>
        </div>
      </div>
    </main>
  );
}
