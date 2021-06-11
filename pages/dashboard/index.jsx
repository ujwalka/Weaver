/** @jsxImportSource theme-ui */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Spinner } from '@theme-ui/components';
import SearchNews from '../../src/components/SearchNews/SearchNews';
import TopNews from '../../src/components/TopNews/TopNews';
import RecentlyViewed from '../../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../../src/components/DashNav/DashNav';
import Login from '../../src/components/Login/Login';
import authenticationApi from '../../src/apiServices/authenticationApi';
import setIsAuthenticated from '../../redux/actionCreators/setIsAuthenticated';
function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(
    // @ts-ignore
    (state) => state.authenticationReducer
  );

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    (async () => {
      if (token) {
        console.log('token', token);
        // @ts-ignore
        const isValid = await authenticationApi.validateToken({ token });
        console.log(isValid, 'Is Valid');
        if (isValid) {
          console.log('IsValid');
          dispatch(setIsAuthenticated());
        } else {
          router.push('/');
        }
      } else {
        router.push('/');
      }
    })();
  }, []);

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
        <Spinner />
      )}
    </>
  );
}

export default Dashboard;
