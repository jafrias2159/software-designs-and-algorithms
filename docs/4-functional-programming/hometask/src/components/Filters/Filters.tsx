import { useEffect, useMemo, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';
import { Row } from '../Table';

interface FiltersProps {
  store?: Row[];
  updateStore?: (val) => void;
  setSearchData?: (val) => void;

}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
  {
    title: 'Without posts',
  },
  {
    title: 'More than 100 posts',
  },
];

export function Filters(props: FiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const onChange = ({ title }) => {
    console.log(title); // for debugging

    let updatedFilters;
    if (selectedFilter.find((filter) => filter === title)) {
      updatedFilters = selectedFilter.filter((filter) => filter !== title);
    } else {
      updatedFilters = [...selectedFilter, title];
    }

    setSelectedFilter(updatedFilters);
  };

  const filteredValues = useMemo(() => {
    const withCeroPost = selectedFilter.find(
      (filter) => filter === 'Without posts'
    )
      ? true
      : false;
    const withHundredPost = selectedFilter.find(
      (filter) => filter === 'More than 100 posts'
    )
      ? true
      : false;
    const filteredRows = props.store.filter((userInfo: Row) => {
      if (withCeroPost && userInfo.posts === 0) return true;
      if (withHundredPost && userInfo.posts >= 100) return true;
      return false;
    });

    return filteredRows.length === 0 ? [...props.store] : filteredRows;
  }, [selectedFilter, props.store]);


    useEffect(() => {
      props.updateStore(filteredValues);
      props.setSearchData(filteredValues);
    }, [filteredValues, props.setSearchData, props.updateStore])

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={
                !!selectedFilter.find((filter) => filter === option.title)
              }
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
