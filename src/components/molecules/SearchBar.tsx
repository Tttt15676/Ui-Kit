import React from 'react';
import { Input, Button } from '../atoms';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSearch?: React.FormEventHandler<HTMLFormElement>;
  buttonLabel?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  onSearch,
  buttonLabel = 'Search',
}) => {
  return (
    <form className={styles.searchBar} onSubmit={(event) => {
      event.preventDefault();
      onSearch?.(event);
    }}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.searchInput}
        aria-label="Search"
      />
      <Button type="submit" variant="primary" className={styles.searchButton}>
        {buttonLabel}
      </Button>
    </form>
  );
};
