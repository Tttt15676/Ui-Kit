import React from 'react';
import { Button } from '../atoms';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  /** The project title */
  title: string;
  /** Short description of the project */
  description: string;
  /** URL of the project image */
  imageUrl: string;
  /** Array of technology tags */
  tags: string[];
  /** Link to view the project */
  link: string;
  /** Optional CSS class name */
  className?: string;
}

/**
 * ProjectCard Molecule Component
 * 
 * Displays a project card with image, title, description, technology tags, and a view button.
 * Features a modern design with white background, rounded corners, and subtle hover shadow.
 * 
 * @example
 * <ProjectCard
 *   title="Portfolio Website"
 *   description="A modern portfolio built with React and TypeScript"
 *   imageUrl="/images/portfolio.png"
 *   tags={['React', 'TypeScript', 'CSS']}
 *   link="https://example.com/project"
 * />
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  link,
  className,
}) => {
  return (
    <div className={`${styles.projectCard} ${className || ''}`.trim()}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.tagsList}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="primary"
          className={styles.viewButton}
          onClick={() => window.open(link, '_blank')}
        >
          View Project
        </Button>
      </div>
    </div>
  );
};
