import React from "react";

const Banner = () => {
  return (
    <div className="bg-black flex justify-between items-center px-8 py-4 rounded-md mt-10">
      <div className="text-white w-2/3">
        <h1 className="text-5xl font-bold mb-4 text-left">
          BEST TOYS FOR <br /> YOUR KIDS
        </h1>
        <p className="text-lg text-left ">
          Welcome to ToyTopia! We are your one-stop-shop for all things toys.
          <br />
          Our store offers a wide selection of toys for kids of all ages. From
          action figures and dolls to board games and educational toys, you'll
          find everything your child needs to fuel their imagination and
          creativity. Our team is dedicated to providing the best shopping
          experience and ensuring that you find the perfect toys for your little
          ones. Visit ToyTopia today and embark on a thrilling adventure of play
          and fun!
        </p>
      </div>
      <div className="w-1/3 ml-8">
        <img
          src="https://i.ibb.co/JrJ7t2z/0eeb0fe7d2259d620f304e88d4b0c362.png"
          alt="ToyTopia"
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
