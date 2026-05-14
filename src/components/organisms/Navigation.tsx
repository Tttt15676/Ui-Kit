import React from 'react';
import { SearchBar } from '../molecules';
import { ThemeToggle } from '../atoms';
import styles from './Navigation.module.css';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Navigation: React.FC = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.brand}>Logo</div>

      <nav className={styles.linkGroup} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.searchContainer}>
        <SearchBar />
        <ThemeToggle />
      </div>
    </header>
  );
};
