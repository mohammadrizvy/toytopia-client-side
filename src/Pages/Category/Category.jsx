import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (!categories) {
    // Add a loading state or return null if the data is not available yet
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10">
      <Tabs>
        <TabList>
          {categories.map((category) => (
            <Tab key={category._id}>
              <p className="">{category.title}</p>
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category._id}>
            <div className=" grid grid-cols-2 gap-4">
              {category.toys.map((toy) => (
                <div
                  key={toy.name}
                  className="card card-compact  bg-black text-white shadow-xl"
                >
                  <figure>
                    <img
                      src={toy.image}
                      alt={toy.name}
                      className="w-full h-96 object-cover mb-4"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="text-lg font-semibold">{toy.name}</h3>
                    <p> Price : {toy.price}</p>
                    <div className="flex justify-between">
                      <div className="flex justify-center items-center mt-2">
                        <span className="text-xl text-yellow-500 mr-1">
                          &#9733;
                        </span>
                        <span className="text-xl">{toy.rating}</span>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn text-black">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
