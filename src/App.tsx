import React from 'react';
import { Navigation, ProjectGrid, CTASection, Footer } from './components/organisms';
import './variables.css';
import styles from './App.module.css';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A professional storefront with product discovery, checkout flow, and order management.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    tags: ['React', 'TypeScript', 'Stripe', 'GraphQL'],
    link: 'https://example.com/ecommerce',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'A data-driven subscription dashboard with analytics, reporting, and user account controls.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    tags: ['React', 'Tailwind CSS', 'API', 'Auth'],
    link: 'https://example.com/saas-dashboard',
  },
  {
    id: 3,
    title: 'Portfolio Showcase',
    description: 'A polished portfolio experience highlighting projects, case studies, and client work.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ['Next.js', 'TypeScript', 'CSS Modules', 'SEO'],
    link: 'https://example.com/portfolio',
  },
];

const App: React.FC = () => {
  return (
    <main className={styles.page}>
      <Navigation />

      <div className={styles.card}>
        <ProjectGrid projects={projectsData} />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
};

export default App;
