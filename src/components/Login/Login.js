/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Link } from '@theme-ui/components';
import authenticationApi from '../../apiServices/authenticationApi';
import { useDispatch } from 'react-redux';
import login from '../../../redux/actionCreators/login';
import { useRouter } from 'next/router';
import { Label, Input, Button, Text, Card, Divider } from 'theme-ui';

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
      <div
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '4rem',
          flexDirection: 'column',
          padding: 1,
        }}
      >
        <h1 sx={{ textShadow: '#bfbfbf 1px 0 3px' }}>Weaver</h1>
      </div>
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
          <Button
            sx={{
              paddingTop: '0.5rem',
              bg: 'black',
              mb: 2,
              boxShadow: '0 6px 6px -4px rgba(50,50,50,1)',
              cursor: 'pointer',
            }}
            type='submit'
            disabled={validateForm()}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
