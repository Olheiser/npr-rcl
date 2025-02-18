import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import ladyJustice from "../../public/regina-criminal-lawyer-lady-justice.webp";
import clientFocused from "../../public//client-focused-representation.webp";
import availability from "../../public/availability.webp";
import trackRecord from "../../public/track-record.webp";
import paymentFlexibility from "../../public/payment-flexibility.webp";
import evidenceReview from "../../public/evidence-review.webp";
import service from "../../public/service.webp";
import beatCharges from "../../public/beat-charges.webp";
import guilty from "../../public/guilty.webp";
import speakLawyer from "../../public/speak-to-criminal-lawyer.webp";
import firstStep from "../../public/first-step.webp";
import secondStep from "../../public/second-step.webp";
import thirdStep from "../../public/third-step.webp";
import criminalProcessPhoto from "../../public/criminal-lawyer-criminal-process.webp";
import LeadForm from "./components/LeadForm";
import FAQAccordion from "./components/FAQAccordion";

// For security
import { headers } from 'next/headers'
import Script from 'next/script'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Criminal Lawyer in Regina | Expert Criminal Defence - Nicholas Robinson",
  description: "Looking for a trusted criminal lawyer in Regina? Nicholas Robinson provides expert criminal defence for all criminal charges. Call now for a free consultation and protect your rights.",
  alternates: {
    canonical: 'https://reginacriminallawyer.ca',
  }
};

export default async function Home() {
  const nonce = (await headers()).get('x-nonce')

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://reginacriminallawyer.ca/",
    "url": "https://reginacriminallawyer.ca/",
    "name": "Regina Criminal Lawyer - Nicholas Robinson",
    "image": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
    "datePublished": "2024-12-20T00:00:00+00:00",
    "dateModified": "2024-12-20T00:00:00+00:00",
    "description": "Nicholas Robinson is a trusted Regina Criminal Lawyer specializing in expert legal defence for criminal charges, including impaired driving (DUI), assault, sexual assault, drug offences, and fraud. As a dedicated criminal defence lawyer in Regina, Nicholas fights to protect your rights and deliver the best possible outcome. Contact (306) 994-8323 today for a free consultation.",
    "inLanguage": "en-CA",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Nicholas Robinson Regina Criminal Lawyer",
      "url": "https://reginacriminallawyer.ca/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://reginacriminallawyer.ca/"
        }
      ]
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "@id": "https://reginacriminallawyer.ca/#primaryImage",
      "url": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/972ce4b7-c9a2-4003-3b1d-fd55da8c7800/public",
      "contentUrl": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/972ce4b7-c9a2-4003-3b1d-fd55da8c7800/public",
      "caption": "Nicholas Robinson, Regina Criminal Lawyer, providing specialized criminal defence services.",
      "width": 1150,
      "height": 645
    },
    "mainEntity": {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://reginacriminallawyer.ca/#LegalService",
      "name": "Nicholas Robinson Regina Criminal Lawyer",
      "alternateName": "N.P. Robinson Law Professional Corporation",
      "url": "https://reginacriminallawyer.ca/",
      "logo": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
      "image": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
      "telephone": "+1-306-994-8323",
      "description": "Nicholas Robinson, a leading Regina Criminal Lawyer, provides expert criminal defence for all criminal charges, including impaired driving (DUI), sexual assault, assault, drug offences, and fraud. With a proven track record of success in Regina courts, Nicholas Robinson ensures strong, personalized representation to protect your rights. Contact +1-306-994-8323 for a free consultation today.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2010 11th Ave Unit 701, Royal Bank Building",
        "addressLocality": "Regina",
        "addressRegion": "SK",
        "postalCode": "S4P 0J3",
        "addressCountry": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "@id": "https://reginacriminallawyer.ca/#ContactPoint",
        "telephone": "+1-647-697-2876",
        "contactType": "customer service",
        "contactOption": ["TollFree", "HearingImpairedSupported"],
        "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Saskatchewan"
        },
        {
          "@type": "City",
          "name": "Regina"
        }
      ],
        "availableLanguage": ["en", "fr", "de", "uk"]
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "61"
      },
      "serviceArea": [
      {
        "@type": "AdministrativeArea",
        "name": "Saskatchewan"
      },
      {
        "@type": "City",
        "name": "Regina"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.4480",
      "longitude": "-104.6178",
      "name": "Nicholas Robinson Law Office - Regina"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://reginacriminallawyer.ca/#DUIDefence",
          "name": "DUI/DWI Defence",
          "description": "Facing DUI or impaired driving charges in Regina? Nicholas Robinson provides expert DUI/DWI defence to protect your driving record and minimize penalties. Call for a strong legal defence today."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drug Charges",
          "@id": "https://reginacriminallawyer.ca/#DrugCharges",
          "description": "Accused of drug offences in Regina? Get experienced legal defence for possession, trafficking, and drug-related charges. Nicholas Robinson will fight to protect your rights and your future."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://reginacriminallawyer.ca/#AssaultDefence",
          "name": "Assault Charges",
          "description": "Charged with assault in Regina? Nicholas Robinson offers strategic legal defence for assault charges, including simple assault, aggravated assault, and domestic violence. Protect your reputation and freedom."
        }
      }
    ],
    "knowsAbout": [
      "Criminal Defence Law",
      "DUI/DWI Defence",
      "Drug Offences",
      "Assault Charges",
      "Fraud Cases",
      "Youth Criminal Justice Act"
    ],
    "sameAs": [
      "https://g.co/kgs/84UGZ9c", 
      "https://www.facebook.com/nicholasrobinsoncriminallawyer/", 
      "https://www.linkedin.com/company/nicholas-robinson-criminal-lawyer",
      "https://maps.app.goo.gl/r27eSnDYZdJn7g8Q6"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://calendly.com/nicholas-robinson-criminal-lawyer/free-consultation"
      },
      "description": "Schedule a free consultation with Nicholas Robinson, a Regina Criminal Lawyer."
    }
    }
  }
  
  return (
    <>
    {nonce && ( 
        <Script 
          strategy="afterInteractive" 
          nonce={nonce} 
        />
      )}
    <main>
      <section className={styles.introRow}>
        
        <div className={styles.featureRow}>
        <article className={styles.introContainer}>
          <div className={styles.headingContainer}>
            <h1 className={styles.title}>Regina Criminal Lawyer</h1>
            <h2 className={styles.titleSubheading}>Criminal Defence Specialist</h2>
          </div>
          
          
          <p className={styles.introCopy}>Charged with a criminal offence in <strong>Regina</strong>? <strong>Nicholas Robinson</strong>, a dedicated and results-driven <strong>criminal lawyer</strong> in <strong>Saskatchewan</strong>, offers specialized criminal defence tailored to your unique needs. Call <strong><a href="tel:3069948323">(306) 994-8323</a></strong> today for a free consultation and start building your defence with confidence.</p>
          <div className={styles.metricsRow}>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>1,300+</div>
              <div className={styles.clientLabel}>Clients<br/>Represented</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>100+</div>
              <div className={styles.clientLabel}>Successful<br/>Trial Matters</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>15+</div>
              <div className={styles.clientLabel}>Years Defending<br/>Saskatchewan</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>60+</div>
              <div className={styles.clientLabel}>5/5 Star Ratings<br/>On Google</div>
            </div>
          </div>
          <div className={styles.introButtonRow}>
            <a href="tel:3069948323">
              <button className={styles.introButton}>Free Consultation</button>
            </a>
          </div>
        </article>
        <div className={styles.ladyJusticeContainer}>
          <Image 
            src={ladyJustice}
            alt="Regina Criminal Lawyer Lady Justice"
            width={1150}
            height={645}
            className={styles.ladyJustice}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1150px"
            id="primaryImage"
            priority
          />
        </div>
        </div>
      </section>

      <section className={styles.bioRow}>
        <article className={styles.bioContainer}>
          <div className={styles.headingContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.bioHeading}`}><Link href="/practice-areas">Nicholas Robinson, Regina Criminal Lawyer</Link></h2>
          <h3 className={styles.sectionSubheading}>Legal Service With Compassion</h3>
          
          </div>
          <p className={styles.nickBio}>Nicholas Robinson is a trusted criminal defence lawyer in Regina, Saskatchewan, with a proven track record of successfully defending clients since 2014. Known for his approachable demeanor and relentless advocacy, Nicholas provides strategic and personalized legal representation to clients facing a wide range of <Link href="/practice-areas">criminal charges</Link>. His expertise includes <Link href="/practice-areas/driving-offences/impaired-driving">impaired driving (DUI)</Link>, <Link href="/practice-areas/fraud-charges/fraud">fraud</Link>, <Link href="/practice-areas/sexual-offences/sexual-assault">sexual assault</Link>, <Link href="/practice-areas/criminal-harassment">criminal harassment</Link>, and drug-related offences such as <Link href="/practice-areas/drug-charges/possession-of-narcotics">possession of narcotics</Link>. With a strong commitment to protecting your rights and achieving the best possible outcome, Nicholas Robinson is the criminal lawyer Regina residents rely on for effective, compassionate defence.</p>
          <div className={styles.aboutIconGrid}>
            <div className={styles.aboutIconItem}>
              <Image 
                src={clientFocused}
                alt="Client-focused Representation"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Client-focused<br /> Representation</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={availability}
                alt="24/7 Availability"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>24/7<br /> Availability</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={trackRecord}
                alt="Proven Track Record"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Proven<br /> Track Record</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={paymentFlexibility}
                alt="Payment Flexibility"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Payment<br /> Flexibility</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={evidenceReview}
                alt="Thorough Evidence Review"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Thorough<br /> Evidence Review</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={service}
                alt="Committed to Excellence in Service"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Committed to<br /> Excellence in Service</p>
            </div>
          </div>
          <div className={styles.introButtonRow}>
            <a href="tel:3069948323">
              <button className={styles.introButton}>Free Consultation</button>
            </a>
          </div>
        </article>
      </section>

      <section className={styles.practiceRow}>
        <div className={styles.practiceContainer}>
          <div className={styles.leftHeadingContainer}>
            <h2 className={`${styles.sectionHeading} ${styles.practiceHeading}`}><Link href="/practice-areas">Practice Areas</Link></h2>
            <h3 className={`${styles.sectionSubheading} ${styles.practiceSubheading}`}>We Defend All Criminal Charges</h3>
            
          </div>
          <div className={styles.practiceCardContainer}>
            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></h3>
              <p><strong><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></strong> is the intentional, unauthorized touching of someone in a sexual nature, violating their sexual integrity.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/sexual-offences/sexual-assault">Learn more about <strong>Sexual Assault Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></h3>
              <p><strong><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></strong> is the operation of a motor vehicle while under the influence of alcohol, drugs, or both, impairing one&apos;s ability to drive safely.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/driving-offences/impaired-driving">Learn more about <strong>Impaired Driving Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/assault-charges/assault">Assault</Link></h3>
              <p><strong><Link href="/practice-areas/assault-charges/assault">Assault</Link></strong> occurs when a person intentionally applies force, threatens to do so, or obstructs another without consent, potentially involving a weapon.</p>
              <span className={styles.readMore}>
                <Link href="/practice-areas/assault-charges/assault">Assault<strong>Assault Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></h3>
              <p><strong><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></strong> is the deliberate use of deception, misrepresentation, or other dishonest methods to unlawfully obtain property, money, or services.</p>
              <span className={styles.readMore}>
               <Link href="/practice-areas/fraud-charges/fraud">Learn more about <strong>Fraud Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3>Uttering Threats</h3>
              <p><strong>Uttering threats</strong> means knowingly threatening to cause death, bodily harm, property damage, or harm to animals.</p>
              <span className={styles.readMore}>
                <a href="https://reginacriminallawyer.ca/practice-areas/sexual-offences/sexual-assault/">Learn more about <strong>Uttering Threats Charges</strong>
                </a>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></h3>
              <p><strong><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></strong> involves engaging in behavior that causes someone to fear for their safety, without lawful authority.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/criminal-harassment">Learn more about <strong>Criminal Harassment Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
            
            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/young-offenders">Young Offenders</Link></h3>
              <p><strong><Link href="/practice-areas/young-offenders">Young Offenders</Link></strong> are individuals aged 12 to 17 accused of crimes, with the Youth Criminal Justice Act (YCJA) protecting their legal rights.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/young-offenders">Learn more about <strong>Young Offender Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></h3>
              <p><strong><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of narcotics</Link></strong> refers to having custody or control of illegal drugs, whether personally, constructively, or jointly with others.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/drug-charges/possession-of-narcotics">Learn more about <strong>Possession of Narcotics Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></h3>
              <p><strong><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></strong> combines theft with the threat or use of violence, including assaults, weapon use, or acts preventing resistance during the crime.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/property-crimes/robbery">Learn more about <strong>Robbery Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.infoRow}>
        <div className={styles.infoContainer}>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/should-i-plead-guilty">
                  <Image 
                    src={guilty}
                    alt="Scales of justice icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/should-i-plead-guilty">
                <h2 className={styles.infoHeading}>Should I Plead Guilty?</h2></Link>
                <p>Deciding to plead guilty is a serious decision that requires careful consideration. It&apos;s essential to understand the potential penalties and long-term effects of a guilty plea. Consulting a criminal lawyer ensures you have the guidance needed to make an informed choice.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/should-i-plead-guilty/" className={styles.infoButtonLink}>
                  <button className={`${styles.introButton} ${styles.infoButton}`}>Outcomes of a Guilty Plea</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/can-i-beat-the-charges">
                  <Image 
                    src={beatCharges}
                    alt="Breaking free of chains icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/can-i-beat-the-charges">
                <h2 className={styles.infoHeading}>Can I Beat The Charges?</h2></Link>
                <p>Challenging criminal charges can feel overwhelming, but it is possible to beat them. Success depends on factors like the strength of the evidence, rights violations, and available defences. An experienced criminal lawyer can assess your case and develop a strong defence strategy.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/can-i-beat-the-charges" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Beating Criminal Charges</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <a href="tel:3069948323">
                  <Image 
                    src={speakLawyer}
                    alt="Speak to a criminal lawyer icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </a>
            </div>
            <div className={styles.infoContent}>
                <a href="tel:3069948323">
                <h2 className={styles.infoHeading}>Speak to a Criminal Lawyer Now</h2></a>
                <p>Consulting an experienced criminal lawyer in Regina immediately is critical when facing criminal charges. A Regina defence lawyer can offer urgent advice, guide you through each step of the legal process, and fight to secure the best outcome for your case.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <a href="tel:3069948323" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Call Now</button>
            </a>
            </div>
            
          </div>
        </div>
      </section>

      <section className={styles.processRow}>
        <div className={styles.processContainer}>
        <div className={styles.leftHeadingContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.criminalProcessh2}`}><Link href="/criminal-process">Criminal Process</Link></h2>
          <h3 className={styles.sectionSubheading}>Take The First Step Toward Your Defence</h3>
          </div>

          <article>
            <div className={styles.processPhotoContainer}>
              <Link href="/criminal-process">
                <Image 
                  src={criminalProcessPhoto}
                  alt="Committed to Excellence in Service"
                  //width={250}
                  //height={75}
                  className={styles.processImage}
                />
              </Link>
            </div>
            <div className={styles.processContentContainer}>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={firstStep}
                    alt="First Step - Initial Consultation"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                    <h3><a href="tel:3069948323">Initial Consultation</a></h3>
                  </div>
                  
                </div>
                <p>The initial consultation is your first chance to meet with a criminal lawyer and discuss your case. You can outline your situation, ask questions, and receive initial advice about your legal options and the next steps to take.</p>
              </div>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={secondStep}
                    alt="Second Step - Disclosure Review"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                  <h3><a href="tel:3069948323">Disclosure Review</a></h3>
                  </div>
                </div>
                <p>Disclosure review involves carefully examining all evidence the prosecution plans to use against you. Your criminal lawyer will assess the details to uncover weaknesses in the case and craft a strong, tailored defence strategy.</p>
              </div>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={thirdStep}
                    alt="Third Step - Discuss Your Options"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                  <h3><a href="tel:3069948323">Discuss Your Options</a></h3>
                  </div>
                </div>
                <p>After reviewing the disclosure, your criminal lawyer will explain your legal options, including potential defences, the likelihood of success, and possible outcomes, helping you make informed decisions about your case.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.ctaRow}>
        <div className={styles.ctaContainer}>
          <article className={styles.ctaCopySection}>
            <div className={styles.leftHeadingContainer}>
              <h2 className={`${styles.sectionHeading} ${styles.ctaHeading}`}>The Benefits of Hiring a Criminal Lawyer</h2>
              <h3 className={styles.sectionSubheading}>Don&apos;t Wait. Speak to a Criminal Lawyer Today</h3>
            </div>
            <div className={styles.ctaContentContainer}>
              <div className={styles.ctaCopyBlock}>
                <p>When facing criminal charges, having a skilled criminal lawyer can make all the difference. Your lawyer will develop a defence strategy tailored to your case, challenge questionable evidence, uncover new details, and identify witnesses who can strengthen your defence. Additionally, your criminal lawyer will manage all legal complexities, from handling administrative tasks to negotiating with prosecutors for reduced charges or favorable plea deals. Their priority is to protect your rights and secure the best possible outcome for your case.</p>
                {/* Map widget */}
                <div className={styles.mapContainer}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4850192615254!2d-104.6099363!3d50.45069230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f4223089f1b%3A0x7e586f5bf6997390!2sNicholas%20Robinson%20Criminal%20Lawyer!5e0!3m2!1sen!2sca!4v1734732688674!5m2!1sen!2sca" 
                    width="440" 
                    height="400" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nicholas Robinson Criminal Lawyer Regina Office"
                    className={styles.map}
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </article>
          <div className={styles.ctaFormContainer}>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className={styles.faqRow}>
        <div className={styles.faqContainer}>
          <div className={`${styles.FAQTitleRow} ${styles.headingContainer}`}>
            <h2 className={`${styles.sectionHeading}`}><Link href="/criminal-process/faq">Frequently Asked Questions</Link></h2>
            <h3 className={`${styles.sectionSubheading}`}>Got a Question? Give us a call</h3>
          </div>
          <FAQAccordion />
          <div className={styles.FAQButtonContainer}>
              <Link href="/criminal-process/faq" className={styles.infoButtonLink}>
                <button className={styles.faqButton}>View Our FAQ</button>
            </Link>
            </div>
        </div>
      </section>
    </main>
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
