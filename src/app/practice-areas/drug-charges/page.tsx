import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug Charges | Regina Criminal Lawyer",
  description: "Facing drug charges in Regina? Nicholas Robinson provides expert defence for possession, trafficking, and other drug-related offences.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Drug Charges"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-38.8/page-1.html#:~:text=PART%20IOffences%20and%20Punishment&text=4%20(1)%20Except%20as%20authorized,Schedule%20I%2C%20II%20or%20III.">Part 1, section 4(1)</a> of the CDSA as the act of having a substance listed in Schedule I, II, or III without authorization. To secure a conviction, the prosecution must prove the accused had knowledge of the substance&apos;s presence and its nature.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Possession for the Purpose of Trafficking</h2>
                        <p className={styles.categoryCopy}><strong>Possession for the Purpose of Trafficking</strong>involves having a controlled substance with the intent to distribute or sell it. The quantity of the substance plays a crucial role in distinguishing between personal possession and possession for trafficking purposes.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Possession for the Purpose of Trafficking</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Drug Trafficking</h2>
                        <p className={styles.categoryCopy}><strong>Drug Trafficking</strong> refers to the act of distributing, selling, or offering to sell a substance listed in Schedule I through V. Even without direct evidence of sale, possession with intent to distribute can result in a trafficking charge.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Drug Trafficking</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Drug Production</h2>
                        <p className={styles.categoryCopy}>Drug production involves manufacturing, cultivating, or altering a controlled substance listed in Schedule I through V without proper authorization. This includes any activity to create or extract the substance from its source.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Drug Production</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Importing and Exporting Scheduled Substances</h2>
                        <p className={styles.categoryCopy}><strong>Importing and Exporting Scheduled Substances</strong> is a criminal offence when substances listed in the CDSA schedules are transported into or out of Canada without proper authorization.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Importing and Exporting Scheduled Substances</strong>
                        </p>
                    </article>
                </section>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}