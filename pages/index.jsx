/** @jsxImportSource theme-ui */

import React, { useEffect } from 'react';
import SearchNews from '../src/components/SearchNews/SearchNews';
import TopNews from '../src/components/TopNews/TopNews';
import RecentlyViewed from '../src/components/RecentlyViewed/RecentlyViewed';
import DashNav from '../src/components/DashNav/DashNav';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Spinner } from '@theme-ui/components';
import Login from '../src/components/Login/Login';
import authenticationApi from '../src/apiServices/authenticationApi';
import setIsAuthenticated from '../redux/actionCreators/setIsAuthenticated';
function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}

export default LoginPage;
