import React from 'react';
import styles from './Label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** ID of the associated input element */
  htmlFor: string;
  /** Label text or inline content */
  children: React.ReactNode;
  /** Optional additional CSS class name */
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className,
  ...rest
}) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className || ''}`.trim()} {...rest}>
      {children}
    </label>
  );
};
