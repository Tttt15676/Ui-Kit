import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional field label */
  label?: string;
  /** Additional CSS class name */
  className?: string;
}

/**
 * Reusable Input Component
 *
 * Supports standard input props, label rendering, and CSS variable styling.
 */
export const Input: React.FC<InputProps> = ({
  label,
  id,
  className,
  ...rest
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label htmlFor={inputId} className={styles.inputWrapper}>
      {label && <span className={styles.labelText}>{label}</span>}
      <input
        id={inputId}
        className={`${styles.input} ${className || ''}`.trim()}
        {...rest}
      />
    </label>
  );
};
