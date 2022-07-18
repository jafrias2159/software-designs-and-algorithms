import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { Row } from '../Table';

interface SearchProps {
  store?: Row[];
  updateStore?: (val) => void;
}

// OR

//interface SearchProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Search(props: SearchProps) {
  const [searchedValue, setSearchedValue] = useState<string>('');

  const onChange = (value) => {
   
    const selectedRows = props.store.filter((rowITem: Row)=>{
      return (new RegExp(`${value}`, "i")).test(rowITem.country);
    });
    setSearchedValue(value);
    props.updateStore(selectedRows);
  }

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
