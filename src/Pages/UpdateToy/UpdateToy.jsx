import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();

  const {
    _id,
    name,
    price,
    rating,
    quantity,
    detailDescription,
    sellerEmail,
    sellerName,
    subCategory,
    photo
  } = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedToy = {
      _id,
      name: form.name.value,
      photo: form.photo.value,
      sellerName: form.sellerName.value,
      sellerEmail: form.sellerEmail.value,
      subCategory: form.subCategory.value,
      price: form.price.value,
      rating: form.rating.value,
      quantity: form.quantity.value,
      detailDescription: form.detailDescription.value,
    };

    console.log(updatedToy);

    fetch(`http://localhost:5000/updatetoy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Toy updated",
            showConfirmButton: "cool",
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <p className="text-4xl underline font-bold">Update Toy : {name} </p>
      <div className="card-body items-center space-y-4">
        <div className="flex space-x-4">
          <form onSubmit={handleUpdateToy} className="">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Toy Name:</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter Toy Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Picture URL of the toy:</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter Picture URL"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Seller Name:</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={sellerName}
                  placeholder="Enter Seller Name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Seller Email:</span>
                </label>
                <input
                  type="email"
                  defaultValue={sellerEmail}
                  name="sellerEmail"
                  placeholder="Enter Seller Email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Sub-category:</span>
                </label>
                <input
                  type="text"
                  defaultValue={subCategory}
                  name="subCategory"
                  placeholder="Enter Sub-category"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price:</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating:</span>
                </label>
                <input
                  type="text"
                  defaultValue={rating}
                  name="rating"
                  placeholder="Enter Rating"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Available Quantity:</span>
                </label>
                <input
                  type="text"
                  defaultValue={quantity}
                  name="quantity"
                  placeholder="Enter Available Quantity"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail Description:</span>
              </label>
              <textarea
                name="detailDescription"
                defaultValue={detailDescription}
                placeholder="Enter Detail Description"
                rows="8"
                className="input input-bordered w-full"
              ></textarea>
            </div>
            <input
              className="btn btn-wide mt-4 bg-black text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
