import React, { useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  /** Checkbox label text */
  label?: string;
  /** Checkbox checked state */
  checked?: boolean;
  /** Callback function triggered on change */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Disable the checkbox */
  disabled?: boolean;
  /** Unique identifier for the checkbox */
  id?: string;
  /** Additional CSS class name */
  className?: string;
}

/**
 * Custom Checkbox Component
 * 
 * A styled checkbox with:
 * - Hidden default browser input
 * - Custom checkmark using --primary-purple color
 * - Optional label with click support
 * - onChange handler for state management
 * 
 * @example
 * const [isChecked, setIsChecked] = useState(false);
 * <Checkbox 
 *   label="Accept terms" 
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 * />
 * 
 * @example
 * <Checkbox 
 *   label="Disabled option" 
 *   disabled 
 * />
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className,
}) => {
  const [internalChecked, setInternalChecked] = useState(checked ?? false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.checkboxWrapper} ${className || ''}`.trim()}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.hiddenInput}
      />
      <label htmlFor={checkboxId} className={styles.checkboxLabel}>
        <span className={styles.customCheckbox}>
          {isChecked && <span className={styles.checkmark}>✓</span>}
        </span>
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    </div>
  );
};
