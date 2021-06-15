/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from 'react';
import { Spinner } from '@theme-ui/components';
import { Button, Divider, Text, Heading } from 'theme-ui';
import nestApi from '../../apiServices/nestApi';
import authenticationApi from '../../apiServices/authenticationApi';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NestCard from '../NestCard/NestCard';
import addToCurrentNest from '../../../redux/actionCreators/addToCurrentNest';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { motion } from 'framer-motion';
function NestList() {
  const [description, setDescription] = useState('');
  const [nests, setNests] = useState(null);
  const [userId, setUserId] = useState('');
  // @ts-ignore
  const { user } = useSelector((state) => state.authenticationReducer);
  console.log(user);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (user.email) {
        // @ts-ignore
        const { userId } = await authenticationApi.getUser(user.email);
        setUserId(userId);
        console.log(userId, 'from nest list');
        if (userId) {
          const { nest } = await nestApi.getAllNests(userId);
          if (nest) {
            setNests(nest.reverse());
          }
        }
      } else {
        router.push('/');
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userId) {
      await nestApi.createNest(description, userId);
      const { nest } = await nestApi.getAllNests(userId);
      setNests(nest.reverse());
    } else {
      router.push('/');
    }
  };

  const handleDeleteClick = async (nest) => {
    const nestId = nest._id;
    if (userId) {
      await nestApi.deleteNest(nestId, userId);
      const { nest } = await nestApi.getAllNests(userId);
      setNests(nest.reverse());
    } else {
      router.push('/');
    }
  };
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const handleClick = (nest) => {
    dispatch(addToCurrentNest(nest._id));
    router.push('/nest');
  };
  return (
    <>
      <div sx={{ ml: 3, mt: 2, mr: 3 }}>
        <form action='submit' onSubmit={handleSubmit}>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={handleChange}
            placeholder='Add Description'
            required
            sx={{
              height: '2.5rem',
              width: '75%',
            }}
          />
          <Button
            sx={{
              bg: 'black',
              height: '2.5rem',
              ml: '.5rem',
              cursor: 'pointer',
            }}
            type='submit'
          >
            Create Nest
          </Button>
        </form>
      </div>
      <Divider />
      <div
        sx={{
          overflow: 'scroll',
          height: '53vh',
          '::-webkit-scrollbar': { width: 0 },
          scrollbarWidth: 'none',
        }}
      >
        {nests ? (
          nests.map((nest) => (
            <>
              <div
                key={nest._id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  bg: 'black',
                  color: 'white',
                  borderRadius: 3,
                  ml: 2,
                }}
              >
                <div sx={{ ml: 15 }}>
                  <Heading as='h2'>{nest.description}</Heading>
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  sx={{
                    pointer: 'cursor',
                  }}
                  onClick={() => handleDeleteClick(nest)}
                >
                  <Button
                    sx={{
                      bg: 'black',
                      alignItems: 'center',
                      display: 'flex',
                      cursor: 'pointer',
                    }}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </motion.div>
              </div>
              <div sx={{ pointer: 'cursor' }} onClick={() => handleClick(nest)}>
                <motion.div
                  key={nest._id}
                  whileHover={{
                    scale: 0.995,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div>
                    {nest ? <NestCard key={nest._id} nest={nest} /> : null}
                  </div>
                </motion.div>
              </div>
            </>
          ))
        ) : (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Spinner variant='styles.spinner' sx={{ ml: 450, mt: 200 }} />
          </div>
        )}
      </div>
    </>
  );
}

export default NestList;
