import React from "react";
import Swal from "sweetalert2";

const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detailDescription = form.detailDescription.value;

       const newToy = {name, photo , sellerEmail , sellerName , subCategory , price , rating , quantity , detailDescription}

       console.log(newToy);


       fetch("http://localhost:5000/toys" ,{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(newToy)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
              icon: "success",
              title : "Success",
              text : "New toy added",
              showConfirmButton: "cool",
              timer: 1500,
            });
        }
       })


    }
  return (
    <div>
      <p className="text-4xl underline font-bold">Add Toys</p>
      <div className="card-body items-center space-y-4">
        <div className="flex space-x-4">
          <form onSubmit={handleAddToy} className="">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Toy Name:</span>
              </label>
              <input
                type="text"
                name="name"
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
                placeholder="Enter Detail Description"
                rows="8"
                className="input input-bordered w-full"
              ></textarea>
            </div>
            <input
              className="btn btn-wide mt-4 bg-black text-white"
              type="submit"
              value="ADD"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
