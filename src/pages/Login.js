import React from "react";
import { LOGIN_BG_URL } from "../utils/constants";
import { Header } from "../components/Header";

const Login = () => {
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

      <div className="w-[30%] relative mx-auto mt-20 p-16 bg-black bg-opacity-75 rounded-md">
        <h2 className="text-white font-medium text-3xl">Sign In</h2>
        <form>
            <div className="flex flex-col gap-5 justify-center items-center mt-6">
                <input type='text' placeholder="Email or phone number" 
                    className="w-full p-3 rounded-md outline-none"
                />
                <input type='password' placeholder="Password" 
                    className="w-full p-3 rounded-md outline-none"
                />
                <button className="w-full py-3 text-white bg-red-600 rounded-md mt-5">
                    Sign In
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
