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

function NestList() {
  const [description, setDescription] = useState('');
  const [nests, setNests] = useState(null);
  const [userId, setUserId] = useState('');
  // @ts-ignore
  const { user } = useSelector((state) => state.authenticationReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (user.email) {
        // @ts-ignore
        const { userId } = await authenticationApi.getUser({
          email: user.email,
        });
        setUserId(userId);
        const { nest } = await nestApi.getAllNests(userId);
        setNests(nest);
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
      setNests(nest);
    } else {
      router.push('/');
    }
  };

  const handleDeleteClick = async (nest) => {
    const nestId = nest._id;
    if (userId) {
      await nestApi.deleteNest(nestId, userId);
      const { nest } = await nestApi.getAllNests(userId);
      setNests(nest);
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
      <div sx={{ ml: 3, mt: 2 }}>
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
            sx={{ bg: 'black', height: '2.5rem', ml: '.5rem' }}
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
          height: '82vh',
          '::-webkit-scrollbar': { width: 0 },
          scrollbarWidth: 'none',
        }}
      >
        {nests ? (
          nests.map((nest) => (
            <>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div sx={{ mt: 20, ml: 15 }}>
                  <Heading as='h2' mb={2}>
                    {nest.description}
                  </Heading>
                </div>
                <div
                  sx={{
                    pointer: 'cursor',
                    mt: 1,
                  }}
                  onClick={() => handleDeleteClick(nest)}
                >
                  <Button
                    sx={{
                      bg: 'black',
                      height: '2.5rem',
                      alignItems: 'center',
                      display: 'flex',
                      mr: '.5rem',
                      mt: '.5rem',
                    }}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </div>
              </div>
              <Divider />
              <div sx={{ pointer: 'cursor' }} onClick={() => handleClick(nest)}>
                <div>{nest ? <NestCard nest={nest} /> : null}</div>
              </div>
            </>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default NestList;
