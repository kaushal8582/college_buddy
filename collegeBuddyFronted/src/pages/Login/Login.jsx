import React, { useState } from "react";
import "../../cssss/Login.css";
import "../../cssss/loginButton.css";
import logo from "../../assets/resources/img/college-buddy-logo-02.svg";
import gogleImg from "../../assets/resources/svgs/google-logo.svg";
import toast from "react-hot-toast";

import { useContext } from "react";
import myContext from "../../components/context/myContext";
import Loader from "../../components/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import Background from "../../components/homepageBackgroundAnimation/Background";
import { BASE_URL } from "../../../Helper";

const Login = () => {
  const context = useContext(myContext);
  const { setIsAdmin, setIsLogin, loader, setLoader } = context;

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Validation function
  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(user.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    // Password validation
    if (!user.password) {
      newErrors.password = "Password is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const checkAuthorization = async () => {
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      // console.log(accessToken);

      if (!accessToken) {
        setIsAdmin(false);
        return;
      }

      const response = await fetch(
        `${BASE_URL}/collegebuddy/api/v1/users/admin`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(response.status);

      if (response.status === 401) {
        setIsAdmin(false);
        return;
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Received non-JSON response");
      }

      // const data = await response.json();
      console.log(data);
      setIsAdmin(true);
    } catch (error) {
      console.log("Admin protected error", error);
      toast.error("Access denied");
      setIsAuthorized(false);
    }
  };

  const handleSubmit = async () => {
    if (validate()) {
      // Proceed with form submission
      try {
        setLoader(true);
        const response = await fetch(
          `${BASE_URL}/collegebuddy/api/v1/users/login`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(user),
          }
        );

        const value = await response.json();
        // console.log(value.message);
        // console.log(value.data.accessToken);

        const data = {
          data: value.data.user,
          accessToken: value.data.accessToken,
        };
        // console.log(data.accessToken);

        if (value.statusCode == 200) {
          localStorage.setItem("user", JSON.stringify(data));
          toast.success("Login Successful!");
          setIsLogin(true);
          checkAuthorization();
          navigate("/");
        }
      } catch (error) {
        console.log(error);

        return toast.error("Login faield");
      } finally {
        setLoader(false);
      }
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  return (
    <div className="box bg-white w-full h-[100vh] relative grid place-items-center">
      <nav className="pt-10 px-20 max-md-xs:px-6 flex items-center justify-between w-full h-[60px] absolute top-0 left-0 z-50 ">
        <img className="h-10" src={logo} alt="" />
        <Link to="/rejister">
          <li className="sign hoverbtn button flex items-center justify-center w-32 max-md-xs:w-24 h-12 bg-[#79B058] text-white rounded-md cursor-pointer">
            Sign up
          </li>
        </Link>
      </nav>
      <Background />
      <div className="login-window scale-75 bg-[#263238] relative z-50">
        {loader == true ? (
          <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <Loader />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="login-window-title">
          <h1>Login</h1>
          <h3 id="">Welcome back!</h3>
        </div>

        <div className="input-box">
          <input
            id="email-id-field"
            type="text"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <input
          className="bg-transparent"
            id="password-field"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          <div className="reset-password-div mt-6 flex items-center justify-between gap-10">
            <p id="reset-line">Don’t you remember your password?</p>
            <Link id="reset-line-button" to={"/forgot-password"}>
              Forgot Password
            </Link>
          </div>
        </div>

        <div className="login-button-div relative z-20">
          <button id="login-button" className="relative" onClick={handleSubmit}>
            Start Learning Now
          </button>
          <p>
            New Here?
            <a href="/rejister" className="text-blue-500">
              Create your account now
            </a>
          </p>
        </div>

        <div className="divider-div">
          <hr id="divider-1" />
          <p>or</p>
          <hr id="divider-2" />
        </div>

        <div className="login-button-with-google-div">
          <button id="login-button-with-google">
            <img src={gogleImg} alt="Google Logo" />
            Continue with Google
          </button>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center  gap-5 h-[60px] absolute bottom-10  left-0 " >
        <li className="list-none max-md-xs:text-[10px] " >© 2024 College Buddy</li>
        <li className="list-none max-md-xs:text-[10px] " >Terms & Conditions</li>
        <li className="list-none max-md-xs:text-[10px] " >Privacy Policy</li>
        <li className="list-none max-md-xs:text-[10px] " >Contact</li>
      </div>
    </div>
  );
};

export default Login;
