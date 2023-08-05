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
      <MostPopular></MostPopular>
      <Discount></Discount>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  );
};

export default Home;
