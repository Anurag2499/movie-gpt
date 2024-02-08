import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleToggleGpt = () => {
    // Toggle GPT Search view
    dispatch(toggleGptSearchView());
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img
        className="w-48 cursor-pointer mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex justify-between">
          {showGPTSearch && (
            <select
              className="h-[60%] m-auto  py-1 px-2  mx-4 text-white bg-gray-500 rounded-lg"
              onChange={handleLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleToggleGpt}
            className="h-[60%] m-auto  py-1 px-2  mx-4 text-white bg-red-600 rounded-lg"
          >
            {showGPTSearch ? 'Home Page' : 'GPT Search'}
          </button>
          <img
            src={USER_AVATAR}
            alt="userLogo"
            className="hidden md:inline-block  w-12 h-12 m-auto rounded-lg mr-4"
          />
          <button className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
