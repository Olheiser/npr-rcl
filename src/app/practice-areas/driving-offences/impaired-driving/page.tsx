import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impaired Driving | Regina Criminal Lawyer",
  description: "Charged with impaired driving (DUI) in Regina? Nicholas Robinson offers strategic defence to protect your driving privileges and your future.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Impaired Driving"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <p className={styles.contentBreak}><strong>Impaired driving</strong> is a serious criminal offence that endangers public safety. It involves operating a motor vehicle while under the influence of alcohol, drugs, or both, impairing one&apos;s ability to drive responsibly.</p>

    <h2>Legal Definition of Impaired Driving</h2>
    <p><strong>Impaired driving</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.14.html">Section 320.14 of the Criminal Code.</a></p>
                    <p><em>320.14 (1) Everyone commits an offence who</em></p>
                    <p><em>(a) operates a conveyance while the person&apos;s ability to operate it is impaired to any degree by alcohol or a drug or by a combination of alcohol and a drug;</em></p>
                    <p><em>(b) subject to subsection (5), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration that is equal to or exceeds 80 mg of alcohol in 100 mL of blood;</em></p>
                    <p><em>(c) subject to subsection (6), has, within two hours after ceasing to operate a conveyance, a blood drug concentration that is equal to or exceeds the blood drug concentration for the drug that is prescribed by regulation; or</em></p>
                    <p className={styles.contentBreak}><em>(d) subject to subsection (7), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration and a blood drug concentration that is equal to or exceeds the blood alcohol concentration and the blood drug concentration for the drug that are prescribed by regulation for instances where alcohol and that drug are combined.</em></p>
    <h2>Key Elements of Impaired Driving</h2>
    <p>For a conviction, the prosecution must prove the following:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>The accused’s identity.</li>
        <li>The time, date, and location of the alleged offence.</li>
        <li>That the accused was operating a motor vehicle.</li>
        <li>That the accused&apos;s ability to operate the vehicle was impaired by alcohol, drugs, or both.</li>
    </ul>

    <h2>Penalties for Impaired Driving</h2>
    <p>Impaired driving penalties depend on the severity of the offence and the accused&apos;s prior record:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>First Offence:</strong> Minimum fine of $1,000 and a driving prohibition.</li>
        <li><strong>Second Offence:</strong> Minimum 30 days imprisonment and longer driving prohibition.</li>
        <li><strong>Subsequent Offences:</strong> Minimum 120 days imprisonment.</li>
        <li><strong>Indictable Offence:</strong> Up to 10 years imprisonment for severe cases.</li>
    </ul>

    <h2>Defences Against Impaired Driving Charges</h2>
    <p>Several defences may apply, depending on the circumstances:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li><strong>Unlawful Stop or Arrest:</strong> Contesting the validity of the vehicle stop or arrest.</li>
        <li><strong>Faulty Testing Procedures:</strong> Demonstrating errors in administering or interpreting breathalyzer or drug tests.</li>
        <li><strong>Medical Conditions:</strong> Arguing that alleged impairment symptoms were due to a medical issue.</li>
        <li><strong>Lack of Impairment:</strong> Providing evidence that the accused was not impaired while driving.</li>
    </ul>

    <h2>Contact a Criminal Lawyer for Assistance</h2>
    <p>Impaired driving charges are serious and require expert legal representation. A skilled criminal lawyer can analyze the evidence, build a strong defence, and protect your rights throughout the legal process. Call <a href="tel:3069948323">(306) 994-8323</a> today for a free consultation with an experienced criminal lawyer.</p>
</article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}