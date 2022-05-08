/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
const Card = (props) => {
  const { name, description, img, price, _id, quantity, publisher } =
    props.card;
  console.log();
  const navigate = useNavigate();
  return <div className="col ">

    <div className="card text-center">
      <img src={img} className="card-img-top bookCardImage " alt="..." />
      <div>
        <h6 className="fw-bold pt-3">{name}</h6>
        <h6 className=" p-0 m-0">Publisher:{publisher}</h6>
        <p className="">
          <h6 className="fw-bold py-2">price:{price}$</h6>
   
          <h6 className="fw-bold p-0 m-0">
            {quantity<1? "SOLD ":<div>quantity:{quantity}</div>}
            </h6>
        </p>
        <p>{description.slice(0,80)}...</p>
        <button
          onClick={() => {
            navigate(`/book/${_id}`);
          }}
          className="btn  update-button  rounded"
        >
          Update{" "}
        </button>
      </div>
    </div>
  </div>;
};

export default Card;
