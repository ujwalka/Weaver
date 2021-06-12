/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import logout from '../../../redux/actionCreators/logout';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'theme-ui';

function DashNav() {
  const dispatch = useDispatch();
  // @ts-ignore
  const { user } = useSelector((state) => state.authenticationReducer);
  const router = useRouter();
  const handleClick = async () => {
    await authenticationApi.logout('accessToken');
    dispatch(logout());
    router.push('/');
  };
  const myBranchHandleClick = async () => {
    router.push('/branch');
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
      <div
        sx={{
          ml: 3,
          pointer: 'cursor',
        }}
        onClick={() => router.push('/dashboard')}
      >
        <h1>
          <b>Weaver</b>
        </h1>
      </div>
      <div>
        <Button
          sx={{
            mr: 3,
            color: 'white',
            bg: 'black',
            fontSize: '1.2rem',
          }}
          onClick={myBranchHandleClick}
        >
          <b>MyBranch</b>
        </Button>
        <Button
          sx={{ mr: 3, color: 'white', bg: 'black', fontSize: '1.2rem' }}
          onClick={handleClick}
        >
          <b>Logout</b>
        </Button>
      </div>
    </div>
  );
}

export default DashNav;
