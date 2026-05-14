import React from 'react';
import { ProjectCard } from '../molecules';
import styles from './ProjectGrid.module.css';

interface Project {
  /** Unique identifier for the project */
  id: string | number;
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Project image URL */
  imageUrl: string;
  /** Array of technology tags */
  tags: string[];
  /** Link to the project */
  link: string;
}

interface ProjectGridProps {
  /** Array of project objects to display */
  projects: Project[];
  /** Optional CSS class name */
  className?: string;
}

/**
 * ProjectGrid Organism Component
 * 
 * Displays a responsive grid of ProjectCard molecules.
 * Responsive layout: 1 column on mobile, 2 on tablet, 3 on desktop.
 * Shows empty state message if no projects are provided.
 * 
 * @example
 * <ProjectGrid
 *   projects={[
 *     {
 *       id: 1,
 *       title: "Project 1",
 *       description: "Description",
 *       imageUrl: "/image.jpg",
 *       tags: ["React"],
 *       link: "https://example.com"
 *     }
 *   ]}
 * />
 */
export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  className,
}) => {
  if (projects.length === 0) {
    return (
      <div className={`${styles.projectGrid} ${className || ''}`.trim()}>
        <div className={styles.emptyState}>
          <p>No projects found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.projectGrid} ${className || ''}`.trim()}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          tags={project.tags}
          link={project.link}
        />
      ))}
    </div>
  );
};
