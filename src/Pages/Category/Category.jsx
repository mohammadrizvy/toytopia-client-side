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
    <div>
      <Tabs>
        <TabList>
          {categories.map((category) => (
            <Tab key={category._id}>{category.title}</Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category._id}>
            <div className="grid grid-cols-2 gap-4">
              {category.toys.map((toy) => (
                <div key={toy.name} className="p-4 border rounded">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-32 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{toy.name}</h3>
                  <p>{toy.price}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">&#9733;</span>
                    <span>{toy.rating}</span>
                  </div>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    View Details
                  </button>
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
