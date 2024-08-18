import React, { useState } from "react";
import { useContext } from "react";
import "../../cssss/Login.css";
import "../../cssss/loginButton.css";
import myContext from "../../components/context/myContext";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import gogleImg from "../../assets/resources/svgs/google-logo.svg";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../Helper";

const ForgotPassword = () => {
  const context = useContext(myContext);
  const { setIsAdmin, setIsLogin, loader, setLoader } = context;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [formState, setFormState] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formState == 1) {
      try {
        const response = await fetch(
          `${BASE_URL}/collegebuddy/api/v1/users/sendotp`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email: email }),
          }
        );

        const data = await response.json();
        console.log(data);
        if (data.statusCode == 200) {
          toast.success("Otp send successfully");
          setFormState(2);
        }
      } catch (error) {
        toast.error("error");
        console.log(error);
        return;
      }
    } else if (formState == 2) {
      try {
        console.log(email, otp);

        const response = await fetch(
          `${BASE_URL}/collegebuddy/api/v1/users/verifyotp`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email: email, otp: otp }),
          }
        );

        const data = await response.json();

        if (data.statusCode == 200) {
          setUserId(data.data.userId)
          toast.success("Otp matched successfully");
          setFormState(3);
        }
      } catch (error) {
        toast.error("otp match error");
        console.log(error);
        return;
      }
    } else if (formState == 3) {
      try {
        if (!password || !conPassword) {
          return toast.error("all fields are required");
        }

        if (password.trim() !== conPassword.trim()) {
          return toast.error("conform password is not match ");
        }

        console.log(userId);
        

        const response = await fetch(
          `${BASE_URL}/collegebuddy/api/v1/users/resetpassword`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({userId:userId,newPassword:password }),
          }
        );

        const data = await response.json();
        if(data.statusCode==200){
          toast.success("Password update successfully");
          setFormState(1)
          navigate("/login");
        }


      } catch (error) {
        toast.error("update password error");
        console.log(error);
        return;
      }
    }
  };

  return (
    <div className="box w-full h-[100vh] grid place-items-center">
      <div className="login-window relative z-30">
        <div className="login-window-title">
          {formState == 1 && <h1>Forgot Password</h1>}
          {formState == 2 && <h1>Verify OTP</h1>}
          {formState == 3 && <h1>change password</h1>}
        </div>

        <div className="input-box">
          {formState == 1 && (
            <input
              id="email-id-field"
              type="text"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {formState == 2 && (
            <input
              id="email-id-field"
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          {formState === 3 && (
            <>
              <input
                id="password-field"
                type="password"
                name="otp"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                id="email-id-field" // typo corrected: removed extra space
                type="password"
                name="otp"
                placeholder="Conform Password"
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
              />
            </>
          )}
        </div>

        <div className="login-button-div relative z-20">
          <button id="login-button" className="relative" onClick={handleSubmit}>
            {formState == 1 && "Send Otp"}
            {formState == 2 && "Verify Otp"}
            {formState == 3 && "update password"}
          </button>
          <p>
            Already Have an Account
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>

        {/* <div className="divider-div">
          <hr id="divider-1" />
          <p>or</p>
          <hr id="divider-2" />
        </div> */}

        {/* <div className="login-button-with-google-div">
          <button id="login-button-with-google">
            <img src={gogleImg} alt="Google Logo" />
            Continue with Google
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
