/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from 'react';
import { Spinner } from '@theme-ui/components';
import { Button, Divider, Text } from 'theme-ui';
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
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const email = localStorage.getItem('email');
    (async () => {
      if (email) {
        // @ts-ignore
        const { userId } = await authenticationApi.getUser({ email });
        setUserId(userId);
        const { nest } = await nestApi.getAllNests(userId);
        setNests(nest);
      } else {
        router.push('/');
      }
    })();
  }, [userId]);

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
      {/* list of nests */}
      <div sx={{ overflow: 'scroll', height: '82vh', scrollbarWidth: 'none' }}>
        {nests ? (
          nests.map((nest) => (
            <>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div> </div>
                <div
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    pointer: 'cursor',
                    mt: 1,
                  }}
                  onClick={() => handleDeleteClick(nest)}
                >
                  <Text as='h3'>Delete</Text>
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
              <div sx={{ pointer: 'cursor' }} onClick={() => handleClick(nest)}>
                <div>
                  <NestCard nest={nest} />
                </div>
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
