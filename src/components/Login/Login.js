/** @jsxImportSource theme-ui */

import { Link } from '@theme-ui/components';

function Login() {
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
        // onSubmit={}
      >
        <h1>Login</h1>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='name'
          // value={}
          // onChange={}
          placeholder='jdoe@gmail.com'
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          // value={}
          // onChange={}
          required
        />
        <Link href='/register'>
          <a>
            <h4>Register here</h4>
          </a>
        </Link>

        <div sx={{ paddingTop: '0.5rem' }}>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
