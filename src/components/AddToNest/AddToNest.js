/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Select, Box } from 'theme-ui';
import authenticationApi from '../../apiServices/authenticationApi';
import nestApi from '../../apiServices/nestApi';
import strawApi from '../../apiServices/strawApi';
import { motion } from 'framer-motion';
function AddToNest({ article }) {
  const [nests, setNests] = useState(null);
  const [userId, setUserId] = useState('');
  const router = useRouter();
  useEffect(() => {
    const email = localStorage.getItem('email');
    (async () => {
      if (email) {
        // @ts-ignore
        const { userId } = await authenticationApi.getUser(email);
        setUserId(userId);
        const { nest } = await nestApi.getAllNests(userId);
        setNests(nest.reverse());
      } else {
        router.push('/');
      }
    })();
  }, [userId]);
  const handleClick = async (nest) => {
    const postedArticle = await strawApi.createArticle(
      JSON.stringify(article),
      nest._id
    );
    alert('Article added');
  };

  return (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <Select
          sx={{
            width: '15rem',
            bg: 'black',
            color: 'white',
          }}
          arrow={
            <Box
              as='svg'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentcolor'
              sx={{
                ml: -28,
                alignSelf: 'center',
                pointerEvents: 'none',
              }}
            >
              <path d='M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' />
            </Box>
          }
          defaultValue=''
        >
          {nests && nests.length ? (
            nests.map((nest) => (
              <option
                key={nest._id}
                onClick={() => {
                  handleClick(nest);
                }}
              >
                {nest.description}
              </option>
            ))
          ) : (
            <option>No Nests</option>
          )}
        </Select>
      </motion.div>
    </>
  );
}

export default AddToNest;
