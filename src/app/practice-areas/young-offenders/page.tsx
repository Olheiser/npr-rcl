import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Young Offenders | Toronto Criminal Lawyer",
  description: "Are you the parent of a young offender? Call (647) 697-2876 to receive a free consultation with a criminal lawyer in Toronto.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Young Offenders"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <p className={styles.contentBreak}>Young offenders are individuals aged 12 to 17 accused of committing a crime. The <a href="https://laws-lois.justice.gc.ca/eng/acts/y-1.5/">Youth Criminal Justice Act (YCJA)</a> governs the legal process to ensure that the rights of young offenders are protected and emphasizes rehabilitation and reintegration.</p>

    <h2>Key Rights of Young Offenders</h2>
    <p>Under the YCJA, young offenders have unique rights and protections distinct from adult offenders. These include:</p>
    <ul className={`${styles.contentList}`}>
        <li><strong>Age of Criminal Responsibility:</strong> The YCJA applies to individuals aged 12 to 17 years old, ensuring age-appropriate legal procedures.</li>
        <li><strong>Youth Justice Court:</strong> Young offenders are tried in a separate court system with procedures designed specifically for youth cases.</li>
        <li><strong>Privacy Protection:</strong> The YCJA protects the identity of young offenders by prohibiting the publication of their names and sealing court records.</li>
        <li><strong>Custody and Detention:</strong> Detention periods for young offenders are limited, and confinement conditions are tailored to their age and developmental needs.</li>
    </ul>
    <p className={styles.contentBreak}>The YCJA emphasizes guidance, support, and treatment for young offenders to help prevent further involvement in the criminal justice system. The focus is on rehabilitation and reintegration into society rather than punishment.</p>

    <h2>The Importance of Legal Representation</h2>
    <p className={styles.contentBreak}>Hiring an experienced criminal defence lawyer with expertise in young offender cases is critical to ensuring your child&apos;s rights are protected and achieving the best possible outcome for their case.</p>

    <h2>Contact a Defence Lawyer for a Free Consultation</h2>
    <p>We are available 24/7 to discuss your case, provide expert guidance, and explore all available options. If your child has been accused of a crime, don&apos;t hesitate to call us at <a href="tel:3069948323">(306) 994-8323</a>.</p>
</article>

                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}