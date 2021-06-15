/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Link } from '@theme-ui/components';
import authenticationApi from '../../apiServices/authenticationApi';
import { useDispatch } from 'react-redux';
import login from '../../../redux/actionCreators/login';
import { useRouter } from 'next/router';
import { Label, Input, Button, Text, Card, Divider } from 'theme-ui';
import { motion } from 'framer-motion';
const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await authenticationApi.login(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('email', email);
      dispatch(login({ email }));
      router.push('/dashboard');
    }
  };

  const validateForm = () => {
    return false;
  };

  return (
    <Card
      sx={{
        width: '30vw',
        margin: 'auto',
        borderRadius: '3',
        borderColor: 'border',
      }}
    >
      <motion.div
        initial='hidden'
        animate='visible'
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
            alignItems: 'center',
            display: 'flex',
            height: '4rem',
            flexDirection: 'column',
            padding: 1,
          }}
        >
          <h1 sx={{ textShadow: '#bfbfbf 1px 0 2px' }}>Weaver</h1>
        </div>
      </motion.div>
      <Divider />
      <form
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        action='submit'
        onSubmit={handleSubmit}
      >
        <div sx={{ mb: 2, width: '70%' }}>
          <Label htmlFor='email'>Email</Label>
          <Input
            sx={{ outline: 'none' }}
            type='email'
            name='email'
            id='name'
            value={state.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
        </div>
        <div sx={{ mb: 2, width: '70%' }}>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='!Pas$w0rd'
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <Text sx={{ padding: 2 }}>
          New to Weaver?{' '}
          <Link sx={{ color: 'white' }} href='/register'>
            {' '}
            Sign up
          </Link>
        </Text>

        <div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
            whileTap={{ scale: 1 }}
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
            <Button
              sx={{
                paddingTop: '0.5rem',
                bg: 'black',
                mb: 2,
                cursor: 'pointer',
              }}
              type='submit'
              disabled={validateForm()}
            >
              Login
            </Button>
          </motion.div>
        </div>
      </form>
    </Card>
  );
}

export default Login;
