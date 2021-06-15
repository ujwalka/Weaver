/** @jsxImportSource theme-ui */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import logout from '../../../redux/actionCreators/logout';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'theme-ui';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { startCase } from 'lodash';
import { motion } from 'framer-motion';
import BackButton from '../BackButton/BackButton';
function DashNav({ strawPage, articlePage }) {
  const dispatch = useDispatch();
  const [route, setRoute] = useState('');
  const router = useRouter();

  const [sessionUser, setSessionUser] = useState('');
  // @ts-ignore
  const { user } = useSelector((state) => state.authenticationReducer);
  useEffect(() => {
    (async () => {
      const { name } = await authenticationApi.getUser(user.email);
      setSessionUser(startCase(name));
    })();
    setRoute(startCase(router.route.substring(1)));
  }, []);

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
      {strawPage || articlePage ? (
        <>
          <BackButton />
        </>
      ) : (
        <>
          <motion.div
            initial='hidden'
            animate='visible'
            whileHover={{
              scale: 0.95,
              transition: {
                duration: 0.1,
              },
            }}
            whileTap={{
              scale: 0.93,
            }}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
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
                <b sx={{ cursor: 'pointer' }}>Weaver</b>
              </h1>
            </div>
          </motion.div>
        </>
      )}
      <div>
        {route ? (
          <h1
            sx={{
              ml: '7rem',
              color: '#0a0a0a',
            }}
          >
            <b sx={{ cursor: 'pointer' }}>{route}</b>
          </h1>
        ) : null}
      </div>
      <div sx={{ display: 'flex' }}>
        <motion.div
          initial='hidden'
          animate='visible'
          whileHover={{
            scale: 0.94,
            transition: {
              duration: 0.1,
            },
          }}
          whileTap={{ scale: 0.9 }}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
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
            {sessionUser ? <b>{sessionUser}'s Nests</b> : <b>My Nests</b>}
          </Button>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 0.94,
            transition: {
              duration: 0.3,
            },
          }}
          whileTap={{ scale: 0.9 }}
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default DashNav;
