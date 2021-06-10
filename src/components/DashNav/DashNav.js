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
      }}
    >
      <h1>
        <b>Weaver</b>
      </h1>

      <Button mr={3} onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}

export default DashNav;
