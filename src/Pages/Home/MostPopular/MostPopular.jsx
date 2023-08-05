import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MostPopular = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => setPopulars(data));
  }, []);

  return (
    <div className="mt-10 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Most Popular Toys</h2>
        <p className="text-lg text-gray-600 mb-8">
          Check out our selection of the most popular toys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {populars.map((toy) => (
            <div
              key={toy._id}
              data-aos="flip-left"
              className="card  card-compact bg-black text-white  relative"
              
            >
              <span className="indicator-item badge badge-secondary absolute top-2 left-2">
                Popular
              </span>
              <figure>
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="w-full h-full object-cover rounded-md "
                />
              </figure>
              <div className="card-body h-94">
                <h3 className="text-xl font-semibold ">{toy.name}</h3>
                <p className="text-white text-left">{toy.description}</p>
                <p className="text-lg font-bold ">{toy.price}</p>
                <button className="btn bg-white">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
