import React, { useState } from "react";
import { LOGIN_BG_URL } from "../utils/constants";
import { Header } from "../components/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Header />
      <div className="absolute top-0 z-0 w-full">
        <img
          src={LOGIN_BG_URL}
          alt="Background img"
          className="h-screen w-full object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 h-screen bg-gradient-to-t from-black opacity-75 via-transparent to-black " />
      </div>

      <div className="w-[30%] relative mx-auto mt-12 p-16 bg-black bg-opacity-75 rounded-md">
        <h2 className="text-white font-medium text-3xl">
          { isSignInForm ? "Sign In": "Sign Up" }
        </h2>
        <form onSubmit={submitForm}> 
            <div className="flex flex-col gap-5 items-center mt-6">
                { !isSignInForm && 
                  <input type='text' placeholder="Name"
                      className="w-full p-3 rounded-md outline-none"
                      name="name" onChange={handleDataChange} value={data.name}
                  />
                }
                <input type='text' placeholder="Email or phone number" 
                    className="w-full p-3 rounded-md outline-none"
                    name="email" onChange={handleDataChange} value={data.email}
                />
                <input type='password' placeholder="Password" 
                    className="w-full p-3 rounded-md outline-none"
                    name="password" onChange={handleDataChange} value={data.password}
                />
                <button type="submit" className="w-full py-3 text-white bg-[#E50914] rounded-md mt-5 opacity-100 font-bold">
                    { isSignInForm ? "Sign In": "Sign Up" }
                </button>

                <div className="flex gap-2 mt-5">
                  <p className="text-gray-600">{ isSignInForm ? "New to Netflix?": "Already registered?" }</p>
                  <p onClick={toggleSignInForm}className="cursor-pointer">
                    { isSignInForm ? "Sign up now": "Sign in now" }
                  </p>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
