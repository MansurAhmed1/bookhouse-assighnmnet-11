/** @format */

import React from "react";
import "./AllRequest.css";
const AllRequest = (props) => {
  const {name,bookName,email,comment } = props.request;
  console.log( props.value)
  return (
    <div className="text-white border allrequest mt-4 p-2">
        <div className="numberOfRequest text-center text-black bg-info">request-{props.value+1}</div>
      <p className=" mb-0 ">
        {" "}
        <span className="fw-bold">Applicant Name</span> :{name}
      </p>
      <p className=" mb-0">
        {" "}
        <span className="fw-bold">Book Name</span>:{bookName}
      </p>
      <p className=" mb-0">
        {" "}
        <span className="fw-bold">Email</span>:{email}
      </p>
      <p className=" mb-0">
        {" "}
        <span className="fw-bold">comment</span>:{comment}
      </p>
    </div>
  );
};

export default AllRequest;
