import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assault | Regina Criminal Lawyer",
  description: "Facing assault charges in Regina? Nicholas Robinson provides experienced legal defence for simple assault, aggravated assault, and related offences.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Assault"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <p className={styles.contentBreak}><strong>Assault</strong> is a fundamental criminal offence in Canada involving the use or threat of force without consent. This page outlines the legal definition, potential penalties, and the importance of seeking legal representation if you are charged with assault.</p>

    <h2>Legal Definition of Assault</h2>
    <p><strong>Assault</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-265.html">Section 265 of the Criminal Code.</a></p>
    <p><em>265 (1) A person commits an assault when</em></p>
    <p><em>(a) without the consent of another person, he applies force intentionally to that other person, directly or indirectly;</em></p>
    <p><em>(b) he attempts or threatens, by an act or a gesture, to apply force to another person, if he has, or causes that other person to believe on reasonable grounds that he has, present ability to effect his purpose; or</em></p>
    <p><em>(c) while openly wearing or carrying a weapon or an imitation thereof, he accosts or impedes another person or begs.</em></p>
    <p className={styles.contentBreak}><em>(2) This section applies to all forms of assault, including sexual assault, sexual assault with a weapon, threats to a third party or causing bodily harm and aggravated sexual assault.</em></p>

    <h2>Key Elements of Assault</h2>
    <p>For the Crown to prove an assault charge, they must establish:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>The identity of the accused.</li>
        <li>The date and location of the alleged incident.</li>
        <li>The intentional application or threat of force.</li>
        <li>The absence of the complainant&apos;s consent.</li>
    </ul>

    <h2>Penalties for Assault</h2>
    <p>The penalties for assault depend on the severity of the offence and the circumstances:</p>
    <ul className={styles.contentBreak}>
        <li><strong>Summary Conviction:</strong> Up to 6 months in jail and/or a fine of up to $5,000.</li>
        <li><strong>Indictable Offence:</strong> Up to 5 years in prison.</li>
    </ul>

    <h2>Possible Defences for Assault Charges</h2>
    <p>Common defences against assault charges include:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>Self-defence</li>
        <li>Consent</li>
        <li>Lack of intent</li>
        <li>Mistaken identity</li>
        <li>Fabrication or false allegations</li>
    </ul>

    <h2>Contact a Criminal Lawyer Today</h2>
    <p>A knowledgeable criminal lawyer can provide critical advice, assess the evidence, and craft a strong defence tailored to your case. They will protect your rights and work towards the best possible resolution. Call <a href="tel:3069948323">(306) 994-8323</a> to schedule a free consultation with an experienced criminal lawyer.</p>
</article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}