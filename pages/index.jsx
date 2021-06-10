/** @jsxImportSource theme-ui */

import React, { useEffect } from 'react';
import SearchNews from '../src/components/SearchNews/SearchNews';
import TopNews from '../src/components/TopNews/TopNews';
import RecentlyViewed from '../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../src/components/DashNav/DashNav';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Spinner } from '@theme-ui/components';
import Login from '../src/components/Login/Login';
function Dashboard() {
  const { isAuthenticated } = useSelector(
    (state) => state.authenticationReducer
  );
  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <>
          <DashNav />
          <div sx={{ display: 'flex' }}>
            <div sx={{ flex: 1.5 }}>
              <SearchNews />
            </div>
            <div sx={{ flex: 1 }}>
              <div sx={{ display: 'flex', flexDirection: 'column' }}>
                <TopNews />
                <RecentlyViewed />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Dashboard;
