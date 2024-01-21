import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  const [isInput, setInput] = useState({
    email: "",
    phone: "",
    date: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...isInput, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isInput.phone.length < 10) {
      window.alert("at least phone num length is 10");
    } else if (isInput.email.length < 15) {
      window.alert("email error");
    } else if (isInput.date.length < 10) {
      alert("date of birth not defined");
    } else if (isInput.password.length < 6) {
      window.alert("password length is too short");
    } else {
      uploadData(isInput);
      navigate("/Login");
    }
  };

  const uploadData = async (newData) => {
    const url = `https://6558473de93ca47020a93d50.mockapi.io/todo/userinfo`;
    try {
      await axios.post(url, newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center h-[87vh] bg-[#37718e]">
          <div className="w-3/4 lg:w-1/3 bg-white p-8 rounded">
            <div>
              <h2 className="text-center text-3xl font-mono">User SigIn</h2>
            </div>
            <form action="" onSubmit={submitHandler}>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  Email:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="email"
                  name="email"
                  value={isInput.email}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  Phone:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="text"
                  name="phone"
                  value={isInput.phone}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  DOB:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="date"
                  name="date"
                  value={isInput.date}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  Password:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="password"
                  name="password"
                  value={isInput.password}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-center bg-yellow font-mono px-12 py-1 mt-5 rounded  font-medium text-gray-800"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center mt-2 font-mono">
              <Link to={"/Login"}>
                <p className="underline">Already Have An Account</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
