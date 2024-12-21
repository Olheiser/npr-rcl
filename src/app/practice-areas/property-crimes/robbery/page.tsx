import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robbery | Regina Criminal Lawyer",
  description: "Have you been charged with robbery in Regina? Nicholas Robinson delivers skilled legal defence to protect your rights and achieve the best outcome. Call (306) 994-8323 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Robbery"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}> 
    <p className={styles.contentBreak}><strong>Robbery</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/section-343.html">Section 343 of the Canadian Criminal Code</a> as a theft involving the use of violence or threats of violence. This distinguishes robbery from other property crimes, such as theft or burglary (break and enter).</p>

    <h2>Categories of Robbery Charges</h2>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Robbery:</strong> A theft offence committed through the use of violence or threats of violence to obtain property or money.</li>
        <li><strong>Armed Robbery:</strong> Involves the use of a deadly weapon, including items not traditionally considered weapons, like a brick or baseball bat, to threaten or harm the victim.</li>
        <li><strong>Aggravated Robbery:</strong> Occurs when significant bodily harm is inflicted on the victim during the commission of the robbery.</li>
    </ul>

    <h2>Factors That Can Aggravate Robbery Charges</h2>
    <p>Certain circumstances, known as aggravating factors, can result in more severe charges or harsher penalties. These factors include:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>Use of a weapon, particularly firearms or other dangerous objects.</li>
        <li>Causing physical harm or death to the victim.</li>
        <li>Committing the offence as part of a group or organized crime operation.</li>
        <li>A history of prior criminal convictions, especially for similar offences.</li>
        <li>Targeting vulnerable victims, such as children or the elderly.</li>
    </ul>

    <h2>Why You Need Legal Representation</h2>
    <p className={styles.contentBreak}>Facing robbery charges is a serious matter, and having a skilled criminal defence lawyer is critical. They will guide you through the legal process, safeguard your rights, and build a defence strategy tailored to your case’s unique details and circumstances.</p>

    <h2>Contact Us for a Free Consultation</h2>
    <p className={styles.contentBreak}>We are available 24/7 to discuss your case, review your options, and provide expert legal guidance. Call <a href="tel:3069948323">(306) 994-8323</a> to schedule a free consultation with an experienced criminal defence lawyer today.</p>
</article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}