import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraud | Regina Criminal Lawyer",
  description: "Charged with fraud in Regina? Nicholas Robinson offers experienced and strategic legal representation for fraud-related offences.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Fraud"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}> 
    <p className={styles.contentBreak}><strong>Fraud</strong> involves dishonestly obtaining property, money, or valuable services through deception, falsehood, or other fraudulent methods. Fraud-related offences are defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/page-51.html#h-122424">Sections 380 to 382 of the Criminal Code of Canada</a>.</p>

    <h2>Common Types of Fraud</h2>
    <p>Fraud offences cover a wide range of activities, often involving different investigative agencies, such as local police, the Canada Revenue Agency, or provincial regulators. The most common types include:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>Identity theft</li>
        <li>Credit card fraud</li>
        <li>Insurance fraud</li>
        <li>Mortgage fraud</li>
        <li>Securities fraud</li>
        <li>Investment fraud</li>
        <li>Tax fraud</li>
    </ul>

    <h2>Why Legal Representation is Crucial</h2>
    <p className={styles.contentBreak}>Facing fraud charges can be overwhelming and complex. A skilled criminal defence lawyer is critical to protecting your rights, understanding the evidence, and creating a robust defence strategy tailored to the specifics of your case. They can also negotiate with prosecutors and work toward a favorable resolution.</p>

    <h2>Schedule a Free Consultation Today</h2>
    <p className={styles.contentBreak}>If you are facing fraud charges, we are here to help. Available 24/7, our experienced criminal defence lawyers provide expert guidance, explore your legal options, and offer support during this challenging time. Call <a href="tel:3069948323">(306) 994-8323</a> for a free consultation today.</p>
</article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}