import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant: 'primary' or 'secondary' */
  variant?: 'primary' | 'secondary';
  /** Button content */
  children: React.ReactNode;
}

/**
 * Reusable Button Component
 * 
 * Accepts 'primary' or 'secondary' variants.
 * Uses CSS variables from variables.css for consistent styling.
 * Supports onClick and disabled props.
 * 
 * @example
 * <Button variant="primary" onClick={() => console.log('Clicked')}>
 *   Click Me
 * </Button>
 * 
 * @example
 * <Button variant="secondary" disabled>
 *   Disabled Button
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  disabled = false,
  children,
  className,
  ...rest
}) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${className || ''}`.trim();

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
