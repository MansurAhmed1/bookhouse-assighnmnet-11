/** @format */

import { onIdTokenChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ManageInventory = () => {
  const { id } = useParams();
  console.log(id);

  const [book, setBook] = useState({});

  console.log(book);
  useEffect(
    function () {
      fetch(`https://assighment11.herokuapp.com/book/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    },
    [book]
  );
  //quanty set
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const quantity =
      parseInt(book.quantity) + parseInt(event.target.quantity.value);

    // const sumOfQuantity=parseFloat( quantity )+parseFloat(book.quantity)

    const updateQuantity = { quantity };
    const url = `https://assighment11.herokuapp.com/book/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateQuantity)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    event.target.reset();
  };
  //quantity decrease

  const handleDecreaseButton = () => {
    const quantity = parseFloat(book.quantity) - 1;
    if (book.quantity < 1) {
      quantity = 0;
    }

    const updateQuantity2 = { quantity };
    const url = `https://assighment11.herokuapp.com/update/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateQuantity2)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="py-5 mx-auto row" style={{ width: "90%" }}>
      <div className="col-lg-6">
        <div
          className=" text-center py-3 row bg-white border border-white"
          style={{ width: "500px" }}
        >
          <div className="col-lg-6 ">
            {" "}
            <img
              src={book.img}
              className="card-img-top w-100 h-100"
              alt="..."
            />
          </div>
          <div className="col-lg-6 pt-5">
            <h5 className="fw-bold pt-3">{book.name}</h5>
            <h6 className=" p-0 m-0 ">Publisher:{book.publisher}</h6>
            <h6 className="fw-bold pt-2 pb-0">price:{book.price}$</h6>
            <h6 className="fw-bold py-2">
              {book.quantity < 1 ? (
                "SOLD"
              ) : (
                <div>Quantity:{book?.quantity}</div>
              )}
            </h6>

            <p>{book.description}</p>
            <button
              onClick={handleDecreaseButton}
              className="btn bg-black update-button  text-white  rounded"
            >
              Delivered{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-center ">
        <h3 className="text-white text-center fw-bold">update Quantity</h3>
        <form onSubmit={handleOnSubmit} className="mt-3">
          <input
            type="number"
            name="quantity"
            className="py-2 px-5 "
            autocomplete="off"
            required
            placeholder="Enter Quantity "
          />
          <input
            type="submit"
            value="UPDATE"
            className="btn bg-info text-black py-2 px-5 "
          />
        </form>
      </div>
    </div>
  );
};

export default ManageInventory;
