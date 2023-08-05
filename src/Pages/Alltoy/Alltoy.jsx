import React, { useState, useEffect } from "react";
import { Dna } from "react-loader-spinner";
import DnaLoader from "../Shared/DnaLoader/DnaLoader";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <DnaLoader></DnaLoader>
    );
  }

  const handleSearchToy = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Search Toy"
        className="px-2 py-1 mt-4 mb-4 input input-bordered input-md w-full max-w-xs"
        value={searchTerm}
        onChange={handleSearchToy}
      />
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th className="text-sm">Seller</th>
            <th className="text-sm">Toy Name</th>
            <th className="text-sm">Sub-category</th>
            <th className="text-sm">Price</th>
            <th className="text-sm">Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy, index) => (
            <tr key={toy._id}>
              <th>{index + 1}</th>
              <td>{toy.seller}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td className=""> Availabe in stock: {toy.quantity}</td>
              <td>
                <Link to={`/toy/${toy._id}`}>
                  <button className="bg-black btn btn-sm text-white px-4 py-2 rounded">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
