/** @jsxImportSource theme-ui */

import { Link } from '@theme-ui/components';

function Register() {
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
        // onSubmit={}
      >
        <h1>Register Here</h1>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          // value={}
          // onChange={}
          placeholder='John Doe'
          required
        />
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
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          // value={}
          // onChange={}
          required
        />
        <div sx={{ paddingTop: '0.5rem' }}>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
