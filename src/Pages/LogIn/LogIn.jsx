import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animationLogin3_lkwgg6tu.json";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const { login,loginWithGoogle } = useContext(AuthContex);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMessage("");
        showSuccessAlert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });

    console.log(email, password);
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      showSuccessAlert("Google login successful!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen mt-10 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <Lottie
                  className="-mt-20"
                  animationData={loginAnimation}
                  loop={true}
                />
                <p className="text-2xl font-semibold -mt-10">Login</p>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
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
                      Don't have an account?{" "}
                      <Link
                        className="link link-hover text-blue-500"
                        to={"/signup"}
                      >
                        SignUp
                      </Link>
                    </a>
                  </label>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <input
                  type="submit"
                  value="Login"
                  className="btn text-white bg-black"
                />
              </div>
            </form>
            <div className="divider">Or Sign In with</div>
            <div className="text-center">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle btn-outline"
              >
                G
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
