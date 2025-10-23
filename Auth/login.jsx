// import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export const Login = () => {


  return (
    <main className="relative min-h-screen flex items-center justify-center complete">
      <div className="wrapper">
        <div className="form-box login">
          <div className=" text-center">
             <h1 className="font-header text-2xl mb-4">Login</h1>
             <p className="font-body">A click to remove the unwanted</p>
          </div>

          <form action="">
            <div className="input-box">
              <span className="icons"><FaUser /></span>
              <input type="email" required  placeholder="youremail@gmail.com"/>
              <label className="ml-2">Email</label>
            </div>

            <div className="input-box">
              <span className="icons"><RiLockPasswordLine /></span>
              <input type="password" required placeholder="••••" />
              <label className="ml-2">Password</label>
            </div>

            <div className="remeber">
              <label >
                <input type="checkbox" />
                Remeber Password
              </label>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
          
          <button type="submit" className="btn">Login</button>
          <div className="register">
            <p>Don't have an account<a href="#" className="register-link"> Register</a></p>
          </div>
        </div>
      </div>
      
    </main>
  );
};
