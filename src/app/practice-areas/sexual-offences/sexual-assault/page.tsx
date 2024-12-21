import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Assault | Regina Criminal Lawyer",
  description: "Facing sexual assault charges in Regina? Nicholas Robinson provides discreet, experienced, and compassionate legal defence.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Sexual Assault"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <p className={styles.contentBreak}><strong>Sexual assault</strong> involves any non-consensual touching of a sexual nature. It is critical to understand the legal and personal implications of such charges for all parties involved.</p>

    <h2>Definition of Sexual Assault Under the Criminal Code</h2>
    <p><strong>Sexual assault</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-271.html">Section 271 of the Criminal Code.</a></p>
    <p><em>271 Everyone who commits a sexual assault is guilty of</em></p>
    <p><em>(a) an indictable offence and is liable to imprisonment for a term of not more than 10 years or, if the complainant is under the age of 16 years, to imprisonment for a term of not more than 14 years and to a minimum punishment of imprisonment for a term of one year; or</em></p>
    <p className={styles.contentBreak}><em>(b) an offence punishable on summary conviction and is liable to imprisonment for a term of not more than 18 months or, if the complainant is under the age of 16 years, to imprisonment for a term of not more than two years less a day and to a minimum punishment of imprisonment for a term of six months.</em></p>

    <h2>Key Elements of Sexual Assault</h2>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
    <li>The accused&apos;s identity as the perpetrator.</li>
        <li>The date and location where the alleged incident occurred.</li>
        <li>That intentional touching took place.</li>
        <li>That the touching was sexual in nature.</li>
        <li>That the complainant did not provide consent.</li>
        <li>That the accused either knew there was no consent, acted recklessly, or ignored clear indications of non-consent.</li>
    </ul>

    <h2>Potential Penalties for Sexual Assault</h2>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Summary Conviction:</strong> Up to 18 months imprisonment and/or a fine.</li>
        <li><strong>Indictable Offence:</strong> Up to 10 years imprisonment.</li>
        <li><strong>Aggravated Sexual Assault:</strong> Up to life imprisonment.</li>
    </ul>

    <h2>Defences for Sexual Assault Charges</h2>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Consent:</strong> The complainant voluntarily agreed to the act.</li>
        <li><strong>Mistaken Belief in Consent:</strong> The accused had an honest, albeit mistaken, belief that consent was given.</li>
        <li><strong>Alibi:</strong> Evidence showing the accused was not present at the scene of the alleged incident.</li>
        <li><strong>Insufficient Evidence:</strong> The Crown&apos;s evidence fails to meet the standard of proof beyond a reasonable doubt.</li>
        <li><strong>Charter Violations:</strong> Evidence obtained unlawfully or in violation of the accused&apos;s rights under the Canadian Charter of Rights and Freedoms may be excluded from the case.</li>
     </ul>

    <h2>Contact a Criminal Defence Lawyer Today</h2>
    <p>If you are facing charges of sexual assault, it is essential to have a knowledgeable criminal lawyer on your side to protect your rights and navigate the legal complexities. Call <a href="tel:3069948323">(306) 994-8323</a> for a free consultation today.</p>
</article>

                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}