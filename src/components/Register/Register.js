/** @jsxImportSource theme-ui */

import { Link } from '@theme-ui/components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import login from '../../../redux/actionCreators/login';
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
    const res = await authenticationApi.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      dispatch(login({ email }));
      router.push('/dashboard');
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
          mt: '10rem',
          top: '5rem',
          borderRadius: '3',
          borderColor: 'border',
          boxShadow: '0 8px 16px -4px rgba(0,0,0,.1)',
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
            bg: 'white',
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
              value={state.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Text sx={{ padding: 2 }}>
            <Link sx={{ color: 'black' }} href='/'>
              Already a User?
            </Link>
          </Text>
          <Button
            sx={{ paddingTop: '0.5rem', bg: 'black', mb: 2 }}
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
