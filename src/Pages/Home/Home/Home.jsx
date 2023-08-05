import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../../Category/Category";
import Discount from "../Discount/Discount";
import MostPopular from "../MostPopular/MostPopular";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Discount></Discount>
      <MostPopular></MostPopular>
    </div>
  );
};

export default Home;
