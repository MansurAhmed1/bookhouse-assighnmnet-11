/** @format */

import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Helmet} from "react-helmet-async";
import auth from "../firebase.init";
import "./AddItem.css";
const AddItem = () => {
    const [user]=useAuthState(auth)
    const email=user?.email;
    const handleAddItem=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const price=event.target.price.value;
        const quantity=event.target.quantity.value;
        const img=event.target.url.value;
        const publisher=event.target.publisher.value;
        const description=event.target.description.value;
        const data={name,price, quantity,img, description,email,publisher}
        const url = 'http://localhost:5000/book';
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
        event.target.reset()
    }
  return (
    <div className="pb-5 mb-5">
      <Helmet>
        <title>add-item</title>
      </Helmet>
        <h3 className="text-white fw-bold text-center py-4 ">Add Your Item </h3>
      <form onSubmit={handleAddItem} action="">
        <input type="text" name="name" required placeholder="Enter Your Name" />
        <input
          type="number"
          name="price"
          required
          placeholder="Enter Book Price"
        />
        <input
          type="number"
          name="quantity"
          required
          placeholder="Enter Book Quantity"
        />
        <input
          type="text"
          name="publisher"
          required
          placeholder="Enter Publisher Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          readOnly
         
          placeholder="Enter Your Email"
          required
        />
        <input
          type="text"
          name="description"
        
         
          placeholder="Enter Book description"
          required
        />
        <input type="text" name="url" placeholder="Enter Photo Url" required />
        <input    className="bg-info text-black btn input-button text-white fw-bold" type="submit" value="ADD ITEM" />
      </form>
    </div>
  );
};

export default AddItem;
