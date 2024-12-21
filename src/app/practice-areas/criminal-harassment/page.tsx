import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Harassment | Regina Criminal Lawyer",
  description: "If you’re facing criminal harassment charges in Regina, Nicholas Robinson will defend your rights and build a strong legal strategy. Call (306) 994-8323 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Criminal Harassment"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <p className={styles.contentBreak}><strong>Criminal harassment</strong> is defined under <a href="https://laws-lois.justice.gc.ca/Search/Search.aspx?txtS3archA11=harassment&txtT1tl3=%22Criminal+Code%22&h1ts0n1y=0&ddC0nt3ntTyp3=Acts#:~:text=264%20(1)%20No%20person%20shall,or%20the%20safety%20of%20anyone">Section 264 (1) of the Canadian Criminal Code</a> as engaging in conduct without lawful authority that causes another person to reasonably, in all circumstances, fear for their safety or the safety of anyone known to them.</p>

    <h2>Types of Prohibited Conduct</h2>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>Repeatedly following or shadowing the individual or their acquaintances from place to place.</li>
        <li>Persistently communicating with the individual or their acquaintances, directly or indirectly.</li>
        <li>Loitering or watching the residence, workplace, or any location frequented by the individual or their acquaintances.</li>
        <li>Engaging in intimidating behavior specifically targeting the individual or their family members.</li>
    </ul>

    <h2>Key Elements of Criminal Harassment</h2>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Harassment:</strong> The conduct must trouble, torment, plague, or badger the complainant persistently or chronologically.</li>
        <li><strong>Fear for Safety:</strong> The complainant must reasonably fear significant psychological harm, emotional distress, or physical danger.</li>
        <li><strong>Repeated Communication:</strong> As little as two instances may suffice to meet the standard of repeated communication under s. 264(2)(b).</li>
        <li><strong>Threatening Conduct:</strong> Includes behavior intended to intimidate and instill fear in the complainant.</li>
        <li><strong>Besetting or Watching:</strong> Besetting involves persistent solicitation or pressing, while watching entails continually observing someone with intent.</li>
    </ul>

    <h2>Penalties for Criminal Harassment</h2>
    <p>Criminal harassment is a hybrid offence, meaning the Crown can choose to proceed summarily or by indictment, which affects the severity of potential penalties.</p>
    <h3>Summary Conviction Penalties</h3>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Minimum:</strong> None</li>
        <li><strong>Maximum:</strong> 2 years less a day imprisonment and/or a $5,000 fine</li>
    </ul>
    <h3>Indictable Offence Penalties</h3>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Minimum:</strong> None</li>
        <li><strong>Maximum:</strong> 10 years imprisonment</li>
    </ul>

    <h2>Aggravating Factors in Criminal Harassment Cases</h2>
    <ul className={`${styles.contentList}`}>
        <li>Violation of a peace bond under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/section-810.html">s. 810 of the Criminal Code</a>.</li>
        <li>Violation of a prohibition order under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/section-161.html">s. 161 of the Criminal Code</a>.</li>
        <li>Failure to comply with the terms or conditions of any other order or recognizance.</li>
        <li>Offences committed in a domestic context.</li>
    </ul>

    <p className={styles.contentBreak}>Call <a href="tel:3069948323">(306) 994-8323</a> to consult a criminal defence lawyer about potential penalties for criminal harassment charges.</p>

    <h2>Don&apos;t Face Criminal Harassment Charges Alone</h2>
    <p className={styles.contentBreak}>An experienced criminal defence lawyer is critical when facing a criminal harassment charge. They will help navigate the legal process, protect your rights, and build a defence tailored to your situation.</p>

    <h2>Get a Free Consultation with a Criminal Defence Lawyer</h2>
    <p>If you&apos;ve been charged with criminal harassment, contact us immediately for expert legal assistance. Call <a href="tel:3069948323">(306) 994-8323</a> to discuss your options with a skilled criminal defence lawyer.</p>
</article>

                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}