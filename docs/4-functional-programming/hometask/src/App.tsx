import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import rows from './mocks/rows.json';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {

  const concatedUserData = [];
  users.forEach((user, index) => {
    concatedUserData.push({
      ...user,
      ...accounts[index],
      ...images[index],
    });
  });

  let convertedData: Row[] = concatedUserData.map((userData) => {
    return {
      avatar: userData.url,
      username: userData.username,
      country: userData.country,
      name: userData.name,
      lastPayments: userData.payments[0]?.totalSum || 0,
      posts: userData.posts
    }
  });

  return convertedData;
};

function App() {
  const [data, setData] = useState<Row[]>(undefined);

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) =>{
        const convertedData = dataConverter(users,accounts,images);
        setData(convertedData);
      }
    );
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>
        <Table rows={data || mockedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
