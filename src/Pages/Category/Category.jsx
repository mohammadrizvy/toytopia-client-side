import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Audio, Dna } from "react-loader-spinner";
import DnaLoader from "../Shared/DnaLoader/DnaLoader";

const Category = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (!categories) {
    return (
      <DnaLoader></DnaLoader>
    );
  }

  return (
    <div className="mt-10">
      <p className="mb-4 font-bold text-5xl">Explore Categories</p>
      <p className="mb-4 text-left text-lg">
        Welcome to our marvelous collection of toys organized by categories!
        Explore an enchanting world of playtime possibilities for kids of all
        ages. Whether you're looking for educational toys to spark curiosity,
        cuddly companions for warm hugs, or thrilling remote-controlled cars for
        racing adventures, we've got it all covered!
      </p>

      <div className="tabs tabs-boxed">
        <Tabs>
          <TabList>
            {categories.map((category) => (
              <Tab key={category._id} className="tab">
                {category.title}
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category._id}>
              <div className="grid grid-cols-2 gap-4">
                {category.toys.map((toy) => (
                  <div
                    key={toy.name}
                    className="card card-compact bg-black text-white "
                  >
                    <figure className="flex justify-center items-center h-[80%]">
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                      <h3 className="text-lg font-semibold">{toy.name}</h3>
                      <p>Price: {toy.price}</p>
                      <div className="flex justify-center items-center mt-2">
                        <span className="text-xl text-yellow-500 mr-1">
                          &#9733;
                        </span>
                        <span className="text-xl">{toy.rating}</span>
                      </div>
                      <div className="card-actions mt-4">
                        <button className="btn text-black">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
