import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="opacity-90"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute w-[30%] bg-black bg-opacity-80 my-40 py-12 px-16 mx-auto right-0 left-0 text-white rounded-lg">
        <h2 className="font-bold text-3xl py-2 mb-3">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-600 text-white w-full rounded-lg ">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="cursor-pointer" onClick={() => handleSignIn()}>
          {isSignIn
            ? 'New to Netflix? Sign up now.'
            : 'Already registered. Sign In.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
