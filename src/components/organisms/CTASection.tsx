import React from 'react';
import { FormField } from '../molecules';
import { Button } from '../atoms';
import styles from './CTASection.module.css';

export const CTASection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2 className={styles.headline}>Ready to scale your digital presence?</h2>
          <p className={styles.description}>
            I help agencies and businesses create custom web solutions that drive results.
            From responsive websites to complex web applications, let's build something amazing together.
          </p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.contactCard}>
            <h3 className={styles.cardTitle}>Quick Contact</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <FormField
                label="Name"
                type="text"
                placeholder="Your name"
                id="contact-name"
              />
              <FormField
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                id="contact-email"
              />
              <FormField
                label="Message"
                type="text"
                placeholder="Tell me about your project"
                id="contact-message"
              />
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};