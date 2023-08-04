import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import SignupAnimation from "../../assets/animationLogin4_lkwgi32b.json";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const { registerUser, updateUserInfo } = useContext(AuthContex);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Call the updateUserInfo function to set display name and photo URL
        updateUserInfo(name, photoURL)
          .then(() => {
            console.log("User profile updated successfully!");
          })
          .catch((error) => {
            console.log("Error updating user profile:", error.message);
          });

        setErrorMessage("");
        showSuccessAlert("Sign up successful!");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="hero min-h-screen mt-10 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <Lottie
                  className="-mt-20"
                  animationData={SignupAnimation}
                  loop={true}
                />
                <p className="text-2xl font-semibold -mt-10">Signup</p>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="URL"
                  name="photoURL"
                  className="input input-bordered"
                />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a className="label-text-alt ">
                      Already have an account?{" "}
                      <Link
                        className="link link-hover text-blue-500"
                        to={"/Login"}
                      >
                        Login
                      </Link>
                    </a>
                  </label>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn text-white bg-black"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
