/** @format */

import React from "react";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";


const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
   <header className="  py-2">
      <nav className="navbar mx-auto navbar-expand-lg navbar-light  mx-4">
          <div className="container-fluid   ">
            <CustomLink className="navbar-brand  d-flex align-items-center"  to='/logo'>
             <h3 className="fw-bold  text-white p-0 m-0">Book Market</h3>
            </CustomLink>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav  d-flex flex-lg-row flex-column justify-content-center align-items-center">
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/'}>
                  Home
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/myitem'}>
               My Item
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/additem'}>
              Add Item
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/tablemangeinventory'}>
                 Manage Item
                </CustomLink>
                <CustomLink className="nav-link mx-3 p-1" to='/blog'>Blog</CustomLink>
                {user? <button style={{color:"rgb(113, 198, 235)"}} className="border-0 bg-transparent mx-3 p-1 " onClick={handleSignOut}>SignOut</button>:<CustomLink  className="nav-link mx-3 p-1" to='/login'>
                  Login
                </CustomLink>
              
               }
              </div>
            </div>
          </div>
        </nav>
      </header>
   

 
    </div>
  );
};

export default Header;


