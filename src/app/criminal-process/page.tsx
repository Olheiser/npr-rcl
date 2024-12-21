import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Process | Regina Criminal Lawyer",
  description: "Facing criminal charges in Regina? Learn how Nicholas Robinson, an experienced criminal lawyer, can guide you through every step of the legal process. Call (306) 994-8323 for immediate assistance.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Criminal Process"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <h2>Criminal Charges Can Be Complex and Overwhelming</h2>
    <p className={styles.contentBreak}>To help you better understand the legal process, we’ve provided some general information below. This information is not a substitute for legal advice. Please contact us at <a href="tel:3069948323">(306) 994-8323</a> for personalized guidance regarding your case.</p>

    <h2>Your First Court Appearance</h2>
    <p>When charged with an offence, you will typically be required to attend Court on a specific date. This may be communicated through a Promise to Appear or an Undertaking. If the prosecutor believes you may not appear or considers you a danger to the public, they may request that the Court remand you into custody. In such cases, a bail hearing (or “show cause” hearing) will be necessary.</p>
    <p className={styles.contentBreak}>In most instances, you must appear in person for your first court date. In certain cases, a lawyer can appear on your behalf, but only if a Designation of Counsel document has been signed and filed with the Court beforehand.</p>

    <h2>Reviewing the Disclosure</h2>
    <p className={styles.contentBreak}>Before entering a plea, it is crucial to obtain and review all evidence related to your case. The Crown is obligated to provide all relevant materials. We carefully analyze the disclosure and provide an initial opinion on potential strategies for your defence. A retainer will be required to cover the disclosure review and any court appearances while awaiting full disclosure.</p>

    <h2>Entering a Plea</h2>
    <p className={styles.contentBreak}>After reviewing the disclosure, we will either enter a plea of guilty or not guilty. In some cases, no plea is entered until after a preliminary hearing. It is essential to ensure all disclosure has been received before entering a plea to take the proper steps in defending you against the charges.</p>

    <h2>The Trial Process</h2>
    <p className={styles.contentBreak}>Trial dates are generally set several months after your last court appearance. An additional retainer or deposit will be required before scheduling a trial date. During the trial, the Judge evaluates all evidence, including witness testimony and police reports. If your rights have been violated, we may file a Charter Application to exclude certain evidence. Charter issues are typically addressed on the same day as the trial.</p>

    <h2>Sentencing and Appeals</h2>
    <p>If convicted at trial, sentencing may occur the same day or on a later date. In some cases, appeals can be filed, depending on the specific circumstances of your case and what transpired during the trial.</p>
</article>

                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}