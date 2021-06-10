/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import logout from '../../../redux/actionCreators/logout';
import { useDispatch } from 'react-redux';
import { Button } from 'theme-ui';

function DashNav() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = async () => {
    await authenticationApi.logout('accessToken');
    dispatch(logout());
    router.push('/');
  };
  return (
    <div
      sx={{
        bg: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '3rem',
      }}
    >
      <h1>
        <b>Weaver</b>
      </h1>

      <Button sx={{ mr: 3, color: 'white', bg: 'black' }} onClick={handleClick}>
        <b>Logout</b>
      </Button>
    </div>
  );
}

export default DashNav;
