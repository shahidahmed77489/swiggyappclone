import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContextProvider";
const LoginPage = () => {
  const { setName, setCartId, isLoginData, setCartItem } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  //

  const submitHandler = (e) => {
    e.preventDefault();
    const findData = isLoginData?.find(
      (item) => item?.email === isEmail && item?.password === isPassword
    );
    setCartItem(findData?.cart);
    if (findData) {
      alert("login successful");
      setName(findData?.email);
      setCartId(findData?.id);
      navigate("/");
      window.sessionStorage.setItem("isLoggedIn", JSON.stringify(findData?.id));
    } else {
      alert("password does not match");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[87vh] bg-[#37718e]">
        <div className="w-3/4 lg:w-1/3 bg-white p-8 rounded">
          <div>
            <h2 className="text-center text-3xl font-mono">User LogIn</h2>
          </div>
          <form action="" onSubmit={submitHandler}>
            <div className="w-full my-4">
              <label htmlFor="" className="text-gray-500 font-mono">
                Email:⇒
              </label>
              <br />
              <input
                className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                type="email"
                onChange={(e) => emailHandler(e)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-500 font-mono">
                Password:⇒
              </label>
              <br />
              <input
                className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                type="password"
                onChange={(e) => passwordHandler(e)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-center bg-yellow font-mono px-12 py-1 mt-8 rounded  font-medium text-gray-800"
              >
                LogIn
              </button>
            </div>
          </form>
          <div className="text-center mt-2 font-mono">
            <Link to={"/Signin"}>
              <p className="underline">
                Don't have An Account ?<span>SignIn</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
