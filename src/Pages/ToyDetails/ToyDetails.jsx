import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    price,
    rating,
    quantity,
    picture,
    detailDescription,
    sellerEmail,
    seller,
  } = toy;

  return (
    <div className="card mt-16 mx-auto lg:card-side text-black max-w-3xl shadow-xl">
      <figure>
        <img className="w-full" src={picture} alt={name} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-4xl text-center font-bold  mb-4">
          {name}
        </h2>
        <h2 className=" text-left text-2xl">Price: {price}</h2>
        <h2 className=" text-left">Available Quantity: {quantity}</h2>
        <h2 className=" text-left ">{detailDescription}</h2>
        <h2 className=" text-left mt-4">Seller: {seller}</h2>
        <h2 className=" text-left">Seller Email: {sellerEmail}</h2>
        <h2 className=" text-left">Rating: {rating}</h2>
      </div>
    </div>
  );
};

export default ToyDetails;
