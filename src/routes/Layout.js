import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase/firebase';
import { addUser, removeUser } from '../redux/userSlice';

const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          dispatch(removeUser());
          navigate('/');
        }else{
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          navigate('/browse');
        }
      });

      return () => unsubscribe();
    }, [])

    return (
        <Outlet />
    )
}

export default Layout