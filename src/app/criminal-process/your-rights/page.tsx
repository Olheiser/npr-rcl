import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Rights | Regina Criminal Lawyer",
  description: "Protect your legal rights during a criminal investigation. Nicholas Robinson, a criminal defence lawyer in Regina, will advocate for you. Call (306) 994-8323 for immediate legal support.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Your Rights"/>
            <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
    <h2>Your Rights Under the Charter</h2>
    <p>The Canadian Charter of Rights and Freedoms, part of the Constitution of Canada, outlines your rights and limits police powers. Some of these rights include:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>The right to remain silent and not give evidence against yourself;</li>
        <li>The right to be free from unreasonable searches or property seizures;</li>
        <li>The right not to be detained or imprisoned without cause;</li>
        <li>The right to be informed of the reason for your arrest or detention;</li>
        <li>The right to speak to a lawyer upon arrest or detention;</li>
        <li>The right to be informed of your right to legal counsel.</li>
    </ul>

    <h2>Interacting with Police</h2>
    <p className={styles.contentBreak}>Police may approach you for a conversation, but they might also be seeking a reason to detain or arrest you. If you prefer not to engage, you can ask, “Am I free to go?” If the officer says “yes,” you are free to leave without further discussion. If the officer says “no,” then you are being detained.</p>

    <h2>Driving and Your Rights</h2>
    <p className={styles.contentH3Break}>Some rights differ while operating a vehicle. For example, police can stop you without cause to check licensing, sobriety, vehicle fitness, or registration. You are required to provide identification and your name and address. In the event of an accident, you may also need to provide a statement to the police.</p>
    <h3>When Police Can Search Your Vehicle</h3>
    <p>Police cannot conduct random vehicle searches. They can only search your vehicle under the following conditions:</p>
    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
        <li>You give the police permission to search the vehicle;</li>
        <li>The officer has reasonable grounds to believe you committed a criminal offence (e.g., the smell of drugs in the vehicle);</li>
        <li>The search is incidental to your arrest;</li>
        <li>The police have a warrant to search the vehicle.</li>
    </ul>

    <h2>If You Are Detained</h2>
    <p className={styles.contentH3Break}>When detained, you have the right to know the reason. An officer can only detain you if they have reasonable grounds to suspect your involvement in a crime. You have the right to remain silent (except when required to report an accident). If you choose not to answer questions, state, “I want to remain silent.” During detention, police may perform a pat-down search to check for weapons.</p>

    <h3>Your Rights During an Arrest</h3>
    <p className={styles.contentH3Break}>If you are arrested, the officer must inform you of the arrest and its reason. They will also explain your rights, including the right to speak to a lawyer. Officers often state, “You need not say anything. You have nothing to hope from any promise or favor and nothing to fear from any threat. Anything you do say may be used as evidence.”</p>

    <h3>Being Questioned by Police</h3>
    <p>Keep these three key points in mind if you are interrogated by the police:</p>
    <ul className={styles.contentList}>
        <li>Police are allowed to lie about evidence, but there are limits to how far they can go;</li>
        <li>You have the right to remain silent and are not obligated to provide a statement at the station or in your vehicle (with some exceptions);</li>
        <li>It is your responsibility to exercise your right to speak to a lawyer. Ask to speak to one as soon as possible. You may be offered the option to call a legal aid lawyer.</li>
    </ul>
</article>

                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}