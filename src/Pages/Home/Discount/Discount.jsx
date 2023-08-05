import React, { useState, useEffect } from "react";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Discount = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  // Set the discount end time using moment.js
  const discountEndTime = moment().add(15, "days");

  useEffect(() => {
    // Update the time left every second
    const timer = setInterval(() => {
      const now = moment();
      const timeRemaining = Math.max(0, discountEndTime.diff(now, "seconds"));
      setTimeLeft(timeRemaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to format the time remaining in HH:MM:SS format
  const formatTimeLeft = (time) => {
    const duration = moment.duration(time, "seconds");
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      data-aos="fade-right"
      className="bg-white text-black p-4 flex items-center justify-between border border-slate-500 mt-20 rounded-md"
    >
      <div className="flex items-center">
        <div>
          <h2 className="text-3xl font-semibold text-left mb-4">
            Limited Time Discount!
          </h2>
          <p className="text-gray-600 mb-2">
            Get amazing discounts on selected products for the next 15 days.
          </p>
          <div className="ml-4 text-left">
            <span className="text-sm -ml-4 font-semibold ">Time Left: </span>
            <span className="font-semibold text-2xl">
              {formatTimeLeft(timeLeft)}
            </span>
          </div>
        </div>
      </div>
      <button className="bg-black text-white btn px-4 py-2 rounded">
        Explore
      </button>
    </div>
  );
};

export default Discount;
