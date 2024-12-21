import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assault Charges | Regina Criminal Lawyer",
  description: "Facing assault charges in Regina? Nicholas Robinson provides strategic defence for simple assault, aggravated assault, and other related charges. Call (306) 994-8323 for immediate help.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Assault Charges"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/assault-charges/assault">Assault</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/assault-charges/assault">Assault</Link></strong> is the intentional application of force, directly or indirectly, to another person without their consent.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/assault-charges/assault">Assault</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Aggravated Assualt</h2>
                        <p className={styles.categoryCopy}><strong>Aggravated assault</strong> occurs when the accused causes serious harm, permanent injury, disfigurement, or endangers the victim’s life. These injuries are typically severe and long-lasting.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Aggravated assault</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Assault with a Weapon</h2>
                        <p className={styles.categoryCopy}>The charge of <strong>assault with a weapon</strong> applies when an individual uses or threatens to use a weapon, causing bodily harm. Weapons can include firearms, knives, or everyday objects used to inflict harm.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Assault with a Weapon</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Spousal Assault</h2>
                        <p className={styles.categoryCopy}><strong>Spousal Assault</strong> refers to acts of intentional, non-consensual force against an intimate partner, such as a current or former spouse, common-law partner, or dating partner. While not a distinct charge under the Canadian Criminal Code, it often leads to related charges, including simple assault under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-266.html">(section 266)</a>.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Spousal Assault</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Assaulting a Peace Officer</h2>
                        <p className={styles.categoryCopy}><strong>Assaulting a Peace Officer</strong> involves the intentional use of force against a police officer, resisting arrest through assault, or interfering with a lawful search or seizure by assaulting a peace officer.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Assaulting a Peace Officer</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Assault Causing Bodily Harm</h2>
                        <p className={styles.categoryCopy}><strong>Assault Causing Bodily Harm</strong> involves the use of physical force resulting in injuries to the victim. These injuries can range from minor, such as cuts or bruises, to more significant harm like fractures or sprains.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Assault Causing Bodily Harm</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Uttering Threats</h2>
                        <p className={styles.categoryCopy}><strong>Uttering Threats</strong> is the act of communicating an intention to harm a person or their property, which can lead to criminal charges.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Uttering Threats</strong>
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