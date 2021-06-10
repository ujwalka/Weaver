/** @jsxImportSource theme-ui */

import { Link } from '@theme-ui/components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import authenticationApi from '../../apiServices/authenticationApi';
import login from '../../../redux/actionCreators/login';

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
    const user = { email, password, name };
    const res = await authenticationApi.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      dispatch(login({ name, email }));
      // redirect to dashboard
      router.push('/dashboard');
      // auth.login(() => props.history.push('/profile'));
    }
  };

  const validateForm = () => {
    return state.confirmPassword !== state.password;
  };

  return (
    <div className='form'>
      <Link href='/'>
        <a>
          <h4>back to login</h4>
        </a>
      </Link>
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
        <h1>Register Here</h1>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={state.name}
          onChange={handleChange}
          placeholder='John Doe'
          required
        />
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
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={state.confirmPassword}
          onChange={handleChange}
          required
        />
        <div sx={{ paddingTop: '0.5rem' }}>
          <button type='submit' disabled={validateForm()}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
