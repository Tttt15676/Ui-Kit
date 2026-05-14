import React from 'react';
import { Button } from '../atoms/Button';
import styles from './Footer.module.css';

const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
];

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.column}>
          <p className={styles.copy}>© 2026 Your Name. All rights reserved.</p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Social</h2>
          <ul className={styles.linkList}>
            {socialLinks.map((link) => (
              <li key={link.label} className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href={link.href}
                  aria-label={`Visit ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Navigate</h2>
          <Button
            variant="secondary"
            onClick={handleScrollTop}
            className={styles.scrollButton}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};
