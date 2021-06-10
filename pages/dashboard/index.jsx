/** @jsxImportSource theme-ui */

import React, { useEffect } from 'react';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import TopNews from '../../src/components/TopNews/TopNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../../src/components/DashNav/DashNav';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Spinner } from '@theme-ui/components';

function Dashboard() {
  const { isAuthenticated } = useSelector(
    (state) => state.authenticationReducer
  );
  console.log(isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, []);

  return (
    <>
      {/* sort by */}
      {isAuthenticated ? (
        <>
          <DashNav />
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <div sx={{ display: 'flex' }}>
              <div sx={{ flex: 2 }}>
                <SearchNews />
              </div>
              <div sx={{ flex: 1 }}>
                <TopNews />
              </div>
            </div>
            <div>
              <RecentlyViewed />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Dashboard;
