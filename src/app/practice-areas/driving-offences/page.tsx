import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driving Offences | Regina Criminal Lawyer",
  description: "Charged with impaired driving, dangerous driving, or other driving offences in Regina? Nicholas Robinson offers skilled criminal defence. Call (306) 994-8323 to protect your future.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Driving Offences"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></strong> refers to operating a motor vehicle while under the influence of alcohol, drugs, or both. Indicators of impairment may include irregular driving patterns, bloodshot eyes, coordination issues, or slurred speech.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Refusing a Breathalyzer or Drug Test</h2>
                        <p className={styles.categoryCopy}><strong><span className={styles.learnMoreLink}>Refusing a Breathalyzer or Drug Test</span></strong> occurs when an individual declines to provide a breath or bodily fluid sample for alcohol or drug testing upon request by law enforcement, as outlined in Sections 320.27 and 320.28 of the Criminal Code.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Refusing a Breathalyzer or Drug Test</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Driving Over .08</h2>
                        <p className={styles.categoryCopy}>Driving over .08 is a criminal offence where an individual&apos;s blood alcohol concentration (BAC) equals or exceeds 0.08 percent within two hours of operating a vehicle.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Driving Over .08</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Dangerous Driving</h2>
                        <p className={styles.categoryCopy}>Dangerous Driving involves operating a vehicle in a manner that poses a risk to public safety given the circumstances, such as reckless driving, excessive speeding, racing, or ignoring traffic signs and signals.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Dangerous Driving</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Failure to Stop at an Accident</h2>
                        <p className={styles.categoryCopy}><strong><span className={styles.learnMoreLink}>Failure to Stop at an Accident</span></strong>  involves knowingly driving away from an accident scene without stopping to provide identification, offer assistance, or fulfill legal obligations unless a valid reason exists.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Failure to Stop at an Accident</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Operation While Prohibited</h2>
                        <p className={styles.categoryCopy}>Operation while prohibited refers to driving a vehicle despite being legally restricted from doing so due to a court order, license suspension, or other legal prohibitions resulting from a prior conviction or discharge.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Operation While Prohibited</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Flight From a Peace Officer</h2>
                        <p className={styles.categoryCopy}>The <strong><span className={styles.learnMoreLink}>Flight From a Peace Officer</span></strong> is charged when an individual fails to stop their vehicle or vessel while being pursued by a peace officer, without a reasonable excuse for not complying.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Flight From a Peace Officer</span></strong>
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