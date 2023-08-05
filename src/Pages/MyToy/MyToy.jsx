import React, { useEffect, useState } from "react";

const MyToy = () => {
  const [mytoys, setMyToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <div>
      <p className="text-4xl underline mb-16 font-bold">My Toys</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mytoys.map((toy) => (
          <div
            key={toy._id}
            className="card card-compact bg-black text-white text-base shadow-xl"
          >
            <figure>
              <img
                className="w-full h-80 object-cover rounded-md "
                src={toy.photo}
                alt={toy.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">{toy.name}</h2>
              <div className="text-left">{toy.detailDescription}</div>
              <p className="text-left">Price: ${toy.price}</p>
              <div className="flex">
                <p className="text-left">Rating: {toy.rating}</p>
                <div className="badge badge-outline">{toy.subCategory}</div>
              </div>
              <p className="text-left">Available Quantity: {toy.quantity}</p>
              <div className="card-actions justify-between">
                <button className="btn text-red-400 btn-square w-[45%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button className="btn w-[45%] bg-white text-black">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToy;
