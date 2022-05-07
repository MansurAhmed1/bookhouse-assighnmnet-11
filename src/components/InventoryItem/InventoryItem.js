/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../card/Card";
import "./InventoryItem.css";

const InventoryItem = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  useEffect(function () {
    fetch("https://assighment11.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(3, 9)));
  });

  console.log(books);

  return (
    <div className="">
      <h3 className="text-center text-white pt-5 fw-bold">Inventory Item</h3>
      <div className="main pb-5  row row-cols-1 row-cols-md-3 gx-4 gx-lg-5 gy-5">
        {books.map((book, index) => (
          <Card card={book} key={index}></Card>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/tablemangeinventory");
        }}
        className="text-black btn px-5 py-2 mb-5  d-block mx-auto bg-white"
      >
        MANAGE INVENTORY
      </button>
    </div>
  );
};

export default InventoryItem;
