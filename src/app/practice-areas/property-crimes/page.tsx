import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Crimes | Regina Criminal Lawyer",
  description: "Facing property crime charges in Regina? Nicholas Robinson provides dedicated defence for theft, burglary, and other property-related offences.",
};

export default function Page() {
    return (
       <main className={styles.pageBody}>
            <PageHeader title="Property Crimes"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Theft</h2>
                        <p className={styles.categoryCopy}><strong>Theft</strong> is the act of unlawfully taking someone else&apos;s property without their consent, regardless of whether the intent is to keep it permanently or temporarily. It also includes converting another person&apos;s property for personal benefit without authorization.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Theft</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></strong>, as defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-343.html">Section 343 of the Canadian Criminal Code</a>, involves theft combined with violence or threats of violence. This distinguishes robbery from other property crimes like theft or break and enter.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Break and Enter</h2>
                        <p className={styles.categoryCopy}><strong>Break and Enter</strong> is the unauthorized entry into a residence, business, or other property with the intent to commit a crime. Forced entry is not necessary, and charges can apply even if no theft or damage occurs.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Break and Enter</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Extortion</h2>
                        <p className={styles.categoryCopy}><strong>Extortion</strong> is the act of using threats, accusations, or violence to coerce someone into surrendering something against their will. This can include money, property, promises, or other tangible or intangible benefits.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Extortion</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Mischief</h2>
                        <p className={styles.categoryCopy}><strong>Mischief</strong> involves the intentional destruction, damage, or interference with someone else&apos;s property. This includes rendering property useless, dangerous, or obstructing lawful use and enjoyment by others.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Mischief</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Arson</h2>
                        <p className={styles.categoryCopy}><strong>Arson</strong> refers to intentionally or recklessly causing damage by fire or explosion to property or structures. The Criminal Code identifies five types of arson: disregard for human life, damage to property, burning one&apos;s own property, arson for fraudulent purposes, and negligence-related arson.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Arson</strong>
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