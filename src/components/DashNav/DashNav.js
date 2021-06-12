/** @jsxImportSource theme-ui */

import React from 'react';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import logout from '../../../redux/actionCreators/logout';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'theme-ui';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

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
        zIndex: 100,
      }}
    >
      <div
        sx={{
          ml: 3,
          pointer: 'cursor',
        }}
        onClick={() => router.push('/dashboard')}
      >
        <h1 sx={{ textShadow: '#bfbfbf 1px 0 3px' }}>
          <b>Weaver</b>
        </h1>
      </div>
      <div sx={{}}>
        <Button
          sx={{
            mr: 3,
            color: 'white',
            bg: 'black',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
          onClick={myBranchHandleClick}
        >
          <b>MyBranch</b>
        </Button>
        <Button
          sx={{
            mr: 3,
            color: 'white',
            bg: 'black',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}
          onClick={handleClick}
        >
          <b sx={{ alignItems: 'center', display: 'flex' }}>
            <div sx={{ mr: 1 }}>Logout</div>
            <ExitToAppOutlinedIcon />
          </b>
        </Button>
      </div>
    </div>
  );
}

export default DashNav;
