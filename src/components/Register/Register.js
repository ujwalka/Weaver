/** @jsxImportSource theme-ui */

import { Link } from '@theme-ui/components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import { Label, Input, Button, Text, Card, Divider } from 'theme-ui';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Register() {
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
    const { email, password, name } = state;
    const user = { email, password, name: name.trim() };
    // get allusers, if the email exists don't register
    // get user from email
    const userExists = await authenticationApi.getUser(email);
    if (!userExists) {
      const res = await authenticationApi.register(user);
      if (res.error) {
        alert(`${res.message}`);
        setState(initialState);
      } else {
        router.push('/');
      }
    } else {
      alert('User already exists');
      setState(initialState);
    }
  };

  const validateForm = () => {
    return state.confirmPassword !== state.password;
  };

  return (
    <>
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
          <h1>Create your Account</h1>
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
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              name='name'
              id='name'
              value={state.name}
              onChange={handleChange}
              placeholder='Finch'
              required
            />
          </div>
          <div sx={{ mb: 2, width: '70%' }}>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='name'
              value={state.email}
              onChange={handleChange}
              placeholder='nest@gmail.com'
              required
            />
          </div>
          <div sx={{ mb: 2, width: '70%' }}>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='!pas$w0rd12'
              value={state.password}
              onChange={handleChange}
              required
            />
          </div>
          <div sx={{ mb: 2, width: '70%' }}>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder='!pas$w0rd12'
              value={state.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Text sx={{ padding: 2 }}>
            <Link sx={{ color: 'white' }} href='/'>
              Already a User?
            </Link>
          </Text>
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
            Sign up
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Register;
