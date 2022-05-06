/** @format */

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../card/Card";
import auth from "../firebase.init";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {Helmet} from "react-helmet-async";
const MyItem = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  console.log(books);

  useEffect(
    function () {
      const getItem = async () => {
        const email = user?.email;
        const url = `http://localhost:5000/books?email=${email}`;
        try {
          const { data } = await axios.get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
          });
          setBooks(data);
        } catch (error) {
          console.log(error.message);
          if (error.response.status === 403 || error.response.status === 401) {
        
            signOut(auth);
            navigate("/login");
          }
        }
      };
      getItem();
    },
    [user]
  );

  return (
   <div>
     <Helmet>
        <title>my-item</title>
      </Helmet>
     <h3 className="myitem fw-bold text-center pb-0 mb-0 pt-4">My Item</h3>
      <div className="main pb-2 pt-0 row mt-0  row-cols-1 row-cols-md-3 gx-4 gx-lg-5 gy-5">
      
      {books.map((book, index) => (
        <Card  card={book} key={index}></Card>
      ))}
    </div>
   </div>
  );
};

export default MyItem;
