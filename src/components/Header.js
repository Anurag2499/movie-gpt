import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/Error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <img src={USER_AVATAR} alt="userLogo" className="w-12 h-12 m-auto" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
