import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import FAQAccordion from "@/app/components/FAQAccordion";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Regina Criminal Lawyer",
  description: "Have questions about your criminal charges? Get clarity and legal guidance from Nicholas Robinson, a trusted criminal lawyer in Regina. Call (306) 994-8323 to speak with us now.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Frequently Asked Questions"/>
            <div className={styles.pageContainer}>
                <article className={`${styles.pageContent} ${styles.faqPageContainer}`}>
                    <FAQAccordion />
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}