import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setIsAuthenticated from '../redux/actionCreators/setIsAuthenticated';
import setIsNotAuthenticated from '../redux/actionCreators/setIsNotAuthenticated';
import authenticationApi from '../src/apiServices/authenticationApi';

export default function useValidateToken() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    (async () => {
      // @ts-ignore
      if (token) {
        const isValid = await authenticationApi.validateToken({ token });
        if (isValid) {
          dispatch(setIsAuthenticated());
        } else {
          dispatch(setIsNotAuthenticated());
          alert('Session Expired, Redirecting to Login Page ');
          router.push('/');
        }
      } else {
        dispatch(setIsNotAuthenticated());
        alert('Invalid User, Redirecting to Login Page ');
        router.push('/');
      }
    })();
  }, []);
  const { isAuthenticated } = useSelector(
    // @ts-ignore
    (state) => state.authenticationReducer
  );
  return isAuthenticated;
}
