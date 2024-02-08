import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              console.log(user);
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + '-' + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="opacity-90 h-screen md:h-full object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[80%] md:w-[30%] bg-black bg-opacity-80 my-40 py-12 px-16 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h2 className="font-bold text-xl md:text-3xl py-2 mb-3">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 text-white w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p
          className="cursor-pointer text-sm text-gray-200"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? 'New to Netflix? Sign up now.'
            : 'Already registered. Sign In.'}
        </p>
        <p className="mt-2 pt-2 text-xs text-gray-400">
          It's a Netflix clone developed by Anurag Singh Dangi.
        </p>
      </form>
    </div>
  );
};

export default Login;
