import React, { useState } from "react";
import "../../cssss/Rejister.css";
import "../../cssss/utility.css";
import logo from "../../assets/resources/img/college-buddy-logo-02.svg";

import googleLogo from "../../assets/resources/svgs/google-logo.svg";
import toast from "react-hot-toast";
import { useContext } from "react";
import myContext from "../../components/context/myContext";

import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/homepageBackgroundAnimation/Background";
import { BASE_URL } from "../../../Helper";

const Register = () => {
  const context = useContext(myContext);
  const { loader, setLoader, allCourseName, allUniversityname } = context;

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    college: "",
    course: "",
    semester: "",
  });

  const [step, setStep] = useState(1);

  // Validation function for email
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Validation function for phone number
  const validatePhoneNumber = (phoneNo) => {
    return phoneNo.length === 10 && /^[0-9]+$/.test(phoneNo);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle step 1 submission
  const handleNextStep = () => {
    const { name, email, password, phoneNo } = user;

    if (!name || !email || !password || !phoneNo) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Invalid email format");
    }

    if (!validatePhoneNumber(phoneNo)) {
      return toast.error("Phone number must be 10 digits");
    }

    setStep(step + 1);
  };

  // Handle step 2 submission
  const handleFinalSubmit = async () => {
    const { college, course, semester } = user;

    if (!college || college === "null") {
      return toast.error("Please select your college");
    }

    if (!course || course === "null") {
      return toast.error("Please select your course");
    }

    if (!semester || semester === "null") {
      return toast.error("Please select your semester");
    }

    try {
      setLoader(true);

      const response = await fetch(
        `${BASE_URL}/collegebuddy/api/v1/users/rejister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.status === 401) {
        toast.error("Email already exists");
        return;
      }

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        toast.success("User registered successfully.");
        setStep(1);
        setUser({
          name: "",
          email: "",
          password: "",
          phoneNo: "",
          college: "",
          course: "",
          semester: "",
        });
        navigate("/login");
      } else {
        toast.error("Failed to register user. Please try again.");
      }
    } catch (error) {
      console.log("Register Error: ", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  // Handle going back to the previous step
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="box bg-white relative ">
      <nav className="pt-10 px-20 max-md-xs:px-2 flex items-center justify-between w-full h-[60px] absolute top-0 left-0 z-50 ">
        <img className="h-10" src={logo} alt="" />
        <Link to="/rejister">
          <li className="sign hoverbtn button flex items-center justify-center w-32 max-md-xs:w-24 h-12 bg-[#79B058] text-white rounded-md cursor-pointer">
            Sign in a
          </li>
        </Link>
      </nav>
      <Background/>
      <div className="login-window scale-75 max-md-xs:scale-[.6] ">
        <div className="login-window-title">
          <h1>{step === 1 ? "Register" : "Complete Your Profile"}</h1>
          <h3>Welcome to College Buddy!</h3>
        </div>
        <div className="process-bar overflow-hidden">
          <div
            className="process-content"
            style={{ width: `${step * 50}%` }}
          ></div>
        </div>

        {step === 1 ? (
          <form action="">
            <input
              id="name-id-field"
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              id="email-id-field"
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
            />
            <input
              id="password-id-field"
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
            <input
              id="phone-id-field"
              type="text"
              name="phoneNo"
              placeholder="Phone No"
              value={user.phoneNo}
              onChange={handleChange}
            />
            <div id="submit-btn" onClick={handleNextStep}>
              Continue
            </div>
            <p>
              Already a member?{" "}
              <a href="../login-page/login.html">
                <span>Login Here</span>
              </a>
            </p>
            <div className="or-div">
              <span></span>
              <p>or</p>
              <span></span>
            </div>
            <div className="google">
              <img src={googleLogo} alt="Google Logo" />
              <p>Continue with Google</p>
            </div>
          </form>
        ) : (
          <div id="form2">
            {loader == true ? (
              <div className="w-full h-full absolute top-0 left-0">
                <div className="absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                  <Loader />
                </div>
              </div>
            ) : (
              ""
            )}

            <select name="college" value={user.college} onChange={handleChange}>
              <option value="null">Select your university or college</option>
              {allUniversityname.map((item)=>(
                <option value={item.name}>
                {item.name}
              </option>
              ))}
              
            </select>
            <select name="course" value={user.course} onChange={handleChange}>
              <option value="null">What is your course?</option>
              {allCourseName.map((item)=>(
                <option value={item.name}>
                {item.name}
              </option>
              ))}
            </select>
            <select
              name="semester"
              value={user.semester}
              onChange={handleChange}
            >
              <option value="null">In which semester are you in?</option>
              <option value="1sem">1st Semester</option>
              <option value="2sem">2nd Semester</option>
              <option value="3sem">3rd Semester</option>
              <option value="4sem">4th Semester</option>
              <option value="5sem">5th Semester</option>
              <option value="6sem">6th Semester</option>
              <option value="7sem">7th Semester</option>
              <option value="8sem">8th Semester</option>
            </select>
            <div id="submit-btn" onClick={handleFinalSubmit}>
              Start Learning Now
            </div>
            <p onClick={handlePreviousStep}>Go back to previous step</p>
          </div>
        )}
      </div>
      <div className=" w-full flex justify-center items-center gap-5 h-[60px] absolute bottom-10  left-0 " >
        <li className="list-none max-md-xs:text-[10px] " >© 2024 College Buddy</li>
        <li className="list-none max-md-xs:text-[10px] " >Terms & Conditions</li>
        <li className="list-none max-md-xs:text-[10px] " >Privacy Policy</li>
        <li className="list-none max-md-xs:text-[10px] " >Contact</li>
      </div>
    </div>
  );
};

export default Register;
