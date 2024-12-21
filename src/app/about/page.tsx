import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import CourtHouse from "../../../public/criminal-lawyer-courthouse.webp";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Regina Criminal Lawyer",
  description: "Nicholas Robinson is a trusted criminal lawyer in Regina, Saskatchewan, offering personalized and strategic criminal defence services. Call (306) 994-8323 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="About"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                <h2>Experienced Regina Criminal Defence Lawyer – Nicholas P. Robinson</h2>
                    <p>Nicholas P. Robinson is a highly experienced criminal defence lawyer with a proven track record in handling cases ranging from <Link href="/practice-areas/driving-offences/impaired-driving">impaired driving</Link> and <Link href="/practice-areas/assault-charges/assault">simple assaults</Link> to complex manslaughter charges. While his primary focus is <Link href="/practice-areas">criminal law</Link>, he has also managed matters involving <Link href="/about/reported-cases">class action lawsuits to employment disputes</Link>.</p>
                    <p>Mr. Robinson is a proud member of the <a href="https://www.lawsociety.sk.ca/">Law Society of Saskatchewan</a> and the <a href="https://lso.ca/home">Law Society of Upper Canada</a>. He has represented clients in courts across <a href="https://www.bccourts.ca/">British Columbia</a>, <a href="https://sasklawcourts.ca/">Saskatchewan</a>, and <a href="https://www.ontariocourts.ca/">Ontario</a>, and has successfully handled appeal cases in Saskatchewan and Ontario courts. With experience spanning all 9 common law provinces, his expertise is both extensive and nationally recognized.</p>
                    <p>A graduate of <a href="https://www.mcgill.ca/law/">McGill University&apos;s Faculty of Law</a>, Nicholas Robinson is ready to assist you. Call <a href="tel:3069948323">(306) 994-8323</a> anytime for trusted legal advice and representation.</p>
                    <Image 
                        alt="Criminal lawyer courthouse lamp and columns"
                        width={800}
                        height={532}
                        src={CourtHouse}
                        className={styles.courtHousePhoto}
                    />
                    <ul>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2008, McGill University Faculty of Law</h3>
                                <p className={styles.aboutListDesc}>Graduates with Bachelor of Civil Laws & Bachelor of Common Laws.</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2009, Law Society of Saskatchewan</h3>
                                <p className={styles.aboutListDesc}>Called to <a href="https://www.cbasask.org/Home">Bar of Saskatchewan</a>.</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2010, Law Society of Upper Canada</h3>
                                <p className={styles.aboutListDesc}>Called to <a href="https://www.oba.org/Home">Bar of Ontario.</a></p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2014, Opening of Regina Office</h3>
                                <p className={styles.aboutListDesc}>Our Smith Street office, conveniently located across from the <a href="https://sasklawcourts.ca/#provincial">Provincial Court of Saskatchewan</a>, opens.</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2016, Opening of Toronto Office</h3>
                            </div>
                        </li>
                    </ul>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}