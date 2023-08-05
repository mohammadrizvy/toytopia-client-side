import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryImages(data));
  }, []);

  console.log(galleryImages);

  return (
    <div className="mt-20 ">
      <p className="mb-4 font-bold text-5xl">ToyTopia's Gallery</p>
      <p className="">
        Welcome to ToyTopia! Here, you can explore a delightful collection of
        our finest products that are sure to spark joy and wonder. Each item in
        our gallery is carefully curated to bring smiles to faces, ignite
        imaginations, and inspire creativity.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {galleryImages.map((galleryImage) => (
          <div
            data-aos="flip-left"
            key={galleryImage._id}
            className="card shadow-xl image-full"
          >
            <figure>
              <img src={galleryImage.galleryPhoto} alt={galleryImage.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left">{galleryImage.name}</h2>
              <p className="text-left">{galleryImage.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
