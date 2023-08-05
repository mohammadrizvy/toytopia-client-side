import React, { useEffect, useState } from "react";

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
            <div key={toy._id} className="card  card-compact shadow-xl">
              <figure>
                <div className="indicator">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-full object-cover mb-4"
                  />
                  <span className="indicator-item badge badge-secondary">
                    Popular
                  </span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
                <p className="text-gray-600 text-left mb-4">
                  {toy.description}
                </p>
                <p className="text-lg font-bold mb-4">{toy.price}</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
