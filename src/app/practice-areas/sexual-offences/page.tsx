import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Offences | Toronto Criminal Lawyer",
  description: "Confronted with criminal charges stemming from a sexual offence? Click here to learn how to proceed.",
};

export default function Page() {
    return (
        
        
        <main className={styles.pageBody}>
            <PageHeader title="Sexual Offences"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></strong> is defined by the Criminal Code of Canada as any non-consensual sexual contact or activity that violates the victim’s sexual integrity, regardless of the specific body part involved.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></strong>
                        </p>
                    </article>
                    
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Soliciting</h2>
                        <p className={styles.categoryCopy}><strong>Soliciting</strong> encompasses two distinct charges: obstructing or impeding traffic and communicating for the purpose of obtaining sexual services in exchange for something of value. It is illegal to disrupt the flow of pedestrian or vehicular traffic in public places or visible areas, with the intention of offering, providing, or procuring sexual services for consideration.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Soliciting</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Sexual Interference</h2>
                        <p className={styles.categoryCopy}><strong>Sexual Interference</strong> involves touching, directly or indirectly, the body of a person under the age of 16 for a sexual purpose, using any part of the body or an object.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Sexual Interference</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Invitation to Sexual Touching</h2>
                        <p className={styles.categoryCopy}><strong>Invitation to Sexual Touching</strong> occurs when a person under the age of 16 is encouraged or incited to touch, directly or indirectly, their own body or another’s body for a sexual purpose.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Invitation to Sexual Touching</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Sexual Exploitation</h2>
                        <p className={styles.categoryCopy}>Sexual exploitation, under Section 153(1) of the Criminal Code, occurs when someone in a position of trust or authority touches or encourages a young person to touch others for a sexual purpose.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Sexual Exploitation</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Procuring Sexual Services</h2>
                        <p className={styles.categoryCopy}><strong>Procuring Sexual Services</strong> is the act of enticing or coercing someone to provide sexual services in exchange for money, drugs, or other benefits. This includes controlling or harbouring individuals engaged in sex work, as outlined in Section 286.3 of the Criminal Code.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Procuring Sexual Services</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Voyeurism</h2>
                        <p className={styles.categoryCopy}><strong>Voyeurism</strong> involves gaining sexual gratification by observing or recording individuals engaged in private activities, such as undressing or sexual acts, without their consent.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Voyeurism</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Obscenity</h2>
                        <p className={styles.categoryCopy}><strong>Obscenity</strong>, as defined under Section 163 of the Criminal Code, involves creating, distributing, or possessing material that exploits sex, crime, horror, cruelty, or violence in an unreasonable manner.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Obscenity</strong>
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