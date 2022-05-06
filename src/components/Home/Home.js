/** @format */

import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import InventoryItem from "../InventoryItem/InventoryItem";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <InventoryItem></InventoryItem>
      <Helmet>
        <title>home</title>
      </Helmet>
    </div>
  );
};

export default Home;
