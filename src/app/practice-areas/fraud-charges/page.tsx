import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraud Charges | Regina Criminal Lawyer",
  description: "Charged with fraud in Regina? Nicholas Robinson offers experienced legal representation for all types of fraud charges.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Fraud Charges"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></strong> involves the intentional use of deceit, falsehoods, or other fraudulent methods to gain financial or personal benefits, often at the expense of others. Common examples include identity theft, tax evasion, insurance fraud, telemarketing scams, and embezzlement.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Counterfeiting</h2>
                        <p className={styles.categoryCopy}><strong>Counterfeiting</strong> involves the illegal reproduction of currency, documents, or goods with the intent to deceive others into accepting them as genuine. This serious offence undermines trust in economic and legal systems.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Counterfeiting</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Forgery</h2>
                        <p className={styles.categoryCopy}><strong>Forgery</strong> occurs when an individual knowingly creates, alters, or falsifies a document with the intent to use it as genuine. Examples include signing someone else&apos;s name on a check or creating fake legal documents, which is prohibited under section 366 of the Criminal Code.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Forgery</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Identity Theft</h2>
                        <p className={styles.categoryCopy}><strong>Identity Theft</strong> refers to the acquisition or possession of another individual&apos;s personal information with the intent to commit fraud or other crimes involving deceit or falsehood, leading to significant financial and personal harm.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Identity Theft</strong>
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