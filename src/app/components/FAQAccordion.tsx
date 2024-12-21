"use client"

import { useState } from "react";
import styles from "../../styles/FAQAccordion.module.css";
import Button from "./Button";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
<div className={styles.faqContainer}>
      {/* FAQ 1 */}
      <div className={styles.faqItem}>
        <div className={styles.faqHeader} onClick={() => toggleAccordion(0)}>
          <span
            className={`${styles.faqArrow} ${
              activeIndex === 0 ? styles.faqArrowActive : ""
            }`}
          >
            ↓
          </span>
          <h3 className={styles.faqQuestion}>Can I Beat the Charges?</h3>
        </div>
        {activeIndex === 0 && (
          <div className={styles.faqAnswer}>
            <p>A skilled criminal defence lawyer can evaluate your case, identify any legal defences, and work to challenge the prosecution’s evidence, increasing your chances of beating the charges.</p> 
            <Button link="/criminal-process/can-i-beat-the-charges" text="Learn how you can beat the charges" />
          </div>
        )}
      </div>

      {/* FAQ 2 */}
      <div className={styles.faqItem}>
        <div className={styles.faqHeader} onClick={() => toggleAccordion(1)}>
          <span
            className={`${styles.faqArrow} ${
              activeIndex === 1 ? styles.faqArrowActive : ""
            }`}
          >
            ↓
          </span>
          <h3 className={styles.faqQuestion}>
            What Are the Costs of Hiring a Criminal Lawyer?
          </h3>
        </div>
        {activeIndex === 1 && (
          <div className={styles.faqAnswer}>
            <p>Legal fees vary depending on your case, and additional expenses like disbursements (travel, printing) may apply. Some lawyers offer flat fees or hourly rates.
            <br /><br />
            Nicholas Robinson provides flexible payment options. Call <a href="tel:3069948323" className={styles.faqLink}>(306) 994-8323</a> to learn more.</p>
          </div>
        )}
      </div>

    {/* FAQ 3 */}
    <div className={styles.faqItem}>
    <div className={styles.faqHeader} onClick={() => toggleAccordion(2)}>
        <span
        className={`${styles.faqArrow} ${
            activeIndex === 2 ? styles.faqArrowActive : ""
        }`}
        >
        ↓
        </span>
        <h3 className={styles.faqQuestion}>
        How Long Does a Criminal Case Usually Take?
        </h3>
    </div>
    {activeIndex === 2 && (
        <div className={styles.faqAnswer}>
        <p>
          The timeline of a criminal case depends on the charges, case complexity, and the court&apos;s schedule. Your criminal lawyer can provide an estimate based on your specific situation.</p>
        <Button link="/criminal-process" text="Criminal Process" /> 
        </div>
    )}
    </div>

    {/* FAQ 4 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(3)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 3 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>How Do I Get in Touch with You?</h3>
  </div>
  {activeIndex === 3 && (
    <div className={styles.faqAnswer}>
      <p>You can reach us at <a href="tel:3069948323" className={styles.faqLink}>
        (306) 994-8323
      </a> to discuss your case and receive immediate legal assistance.</p>
    </div>
  )}
</div>

{/* FAQ 5 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(4)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 4 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
    What Could Happen with My Criminal Case?
    </h3>
  </div>
  {activeIndex === 4 && (
    <div className={styles.faqAnswer}>
      <p>Your case may result in charges being dismissed, a negotiated plea deal, or a trial verdict of guilty or not guilty. A criminal lawyer will fight for the most favorable result for your situation.</p>
    </div>
  )}
</div>

{/* FAQ 6 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(5)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 5 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
    What Are My Legal Rights During a Police Investigation?
    </h3>
  </div>
  {activeIndex === 5 && (
    <div className={styles.faqAnswer}>
      <p>You have the right to remain silent, the right to legal counsel, and the right to know the charges against you. Exercise these rights and contact a lawyer immediately for guidance.</p>
      <Button link="/criminal-process/your-rights" text="Your Rights" />
    </div>
  )}
</div>

{/* FAQ 7 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(6)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 6 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
    Should I Represent Myself in a Criminal Case?
    </h3>
  </div>
  {activeIndex === 6 && (
    <div className={styles.faqAnswer}>
      <p>While self-representation is allowed, it&apos;s not recommended. Criminal law is complex, and an experienced lawyer can protect your rights and improve your chances of a successful outcome.</p>
    </div>
  )}
</div>

{/* FAQ 8 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(7)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 7 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
    What Steps Should I Take If I Am Arrested?
    </h3>
  </div>
  {activeIndex === 7 && (
    <div className={styles.faqAnswer}>
      <p>Stay calm, do not resist arrest, and exercise your right to remain silent. Contact a criminal lawyer immediately to ensure your rights are protected and receive professional legal advice.</p>
      <Button link="/criminal-process/your-rights" text="Learn More" />
    </div>
  )}
</div>

    </div>
  );
};

export default FAQAccordion;