/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Link } from '@theme-ui/components';
import authenticationApi from '../../apiServices/authenticationApi';
import { useDispatch } from 'react-redux';
import login from '../../../redux/actionCreators/login';
import { Router, useRouter } from 'next/router';

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
      dispatch(login({ email }));
    }
  };

  const validateForm = () => {
    return false;
  };

  return (
    <div className='form'>
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
        <h1>Login</h1>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='name'
          value={state.email}
          onChange={handleChange}
          placeholder='jdoe@gmail.com'
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={state.password}
          onChange={handleChange}
          required
        />
        <Link href='/register'>
          <a>
            <h4>Register here</h4>
          </a>
        </Link>

        <div sx={{ paddingTop: '0.5rem' }}>
          <button type='submit' disabled={validateForm()}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
