import React from 'react';
import { Label, Input } from '../atoms';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  id: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  id,
}) => {
  return (
    <div className={styles.formField}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
