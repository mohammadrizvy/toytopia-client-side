import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from "../../assets/animation_lkysjzvv.json";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="">
        <Lottie className="w-[30%] mx-auto h-screen" animationData={errorAnimation} loop={true} />
        <Link className='btn bg-red-600 text-white -mt-60' to={"/"}>Go Home</Link>
      </div>
    );
};

export default ErrorPage;