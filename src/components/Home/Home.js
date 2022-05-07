/** @format */

import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BookRequest from "../BookRequest/BookRequest";
import InventoryItem from "../InventoryItem/InventoryItem";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <InventoryItem></InventoryItem>
    <BookRequest></BookRequest>
      <Helmet>
        <title>home</title>
      </Helmet>
    </div>
  );
};

export default Home;
