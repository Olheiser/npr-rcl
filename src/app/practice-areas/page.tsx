import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Regina Criminal Lawyer",
  description: "Charged with a criminal offence in Regina? Nicholas Robinson offers comprehensive criminal defence services tailored to your case. Call (306) 994-8323 to discuss your legal options today.",
};

export default function Page() {
    return (
    <main className={styles.pageBody}>
        <PageHeader title="Practice Areas"/>
        <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
                <h2>Driving Offences</h2>
                <p>Driving offences involve violations related to operating motor vehicles. Convictions can lead to serious consequences such as driving bans, fines, or imprisonment.</p>
                <p><strong>Driving Offences Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></li>
                    <li>Refusing a Breathalyzer or Drug Test</li>
                    <li>Driving Over .08</li>
                    <li>Dangerous Driving</li>
                    <li>Failure to Stop at an Accident</li>
                    <li>Operation While Prohibited</li>
                    <li>Flight From a Peace Officer</li>
                </ul>

                <h2>Sexual Offences</h2>
                <p>Sexual offences encompass non-consensual acts and exploitation. Convictions carry severe consequences, such as imprisonment and mandatory sex offender registration.</p>
                <p><strong>Sexual Offences Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></li>
                    <li>Soliciting</li>
                    <li>Sexual Interference</li>
                    <li>Invitation to Sexual Touching</li>
                    <li>Sexual Exploitation</li>
                    <li>Procuring Sexual Services</li>
                    <li>Voyeurism</li>
                    <li>Obscenity</li>
                </ul>

                <h2>Assault Charges</h2>
                <p>Assault charges cover acts of physical violence or threats. Consequences vary based on severity and may include restraining orders, fines, or imprisonment, emphasizing the importance of addressing these charges promptly.</p>
                <p><strong>Assault Charges Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/assault-charges/assault">Assault</Link></li>
                    <li>Uttering Threats</li>
                    <li>Aggravated Assault</li>
                    <li>Assault with a Weapon</li>
                    <li>Spousal Assault</li>
                    <li>Assaulting a Peace Officer</li>
                    <li>Assault Causing Bodily Harm</li>
                </ul>

                <h2>Drug Charges</h2>
                <p>Drug charges range from possession to trafficking and production of controlled substances. Convictions can result in fines, rehabilitation orders, or imprisonment, underscoring the focus on public safety.</p>
                <p><strong>Drug Charges Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></li>
                    <li>Possession for the Purpose of Trafficking</li>
                    <li>Drug Trafficking</li>
                    <li>Drug Production</li>
                    <li>Importing and Exporting Scheduled Substances</li>
                </ul>

                <h2>Property Crimes</h2>
                <p>Property crimes involve offences targeting tangible assets, such as theft or vandalism. Penalties can include fines, community service, or jail time, focusing on restitution and deterrence.</p>
                <p><strong>Property Crimes Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></li>
                    <li>Theft</li>
                    <li>Break and Enter</li>
                    <li>Extortion</li>
                    <li>Mischief</li>
                    <li>Arson</li>
                </ul>

                <h2>Fraud Charges</h2>
                <p>Fraud charges address deceptive actions intended for financial or personal gain. Penalties can include fines, restitution, or incarceration, reflecting the seriousness of such offences.</p>
                <p><strong>Fraud Charges Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></li>
                    <li>Counterfeiting</li>
                    <li>Identity Theft</li>
                    <li>Forgery</li>
                </ul>

                <h2>We also Defend the Following Criminal Charges</h2>
                <ul className={`${styles.contentList}`}>
                    <li><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></li>
                    <li>Homicide</li>
                    <li>Highway Traffic Offences</li>
                    <li><Link href="/practice-areas/young-offenders">Young Offender Crimes</Link></li>
                </ul>
            </article>
            <aside className={styles.form}>
                <LeadForm />
            </aside>
        </div>
    </main>
    )
}