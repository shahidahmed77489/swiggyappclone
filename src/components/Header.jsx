import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContextProvider";
import SearchBar from "./SearchBar";
const Header = () => {
  const {
    isCityName,
    isShowSearchSection,
    setShowSearchSection,
    isCartItem,
    isName,
  } = useContext(GlobalContext);
  const searchCityHandler = () => {
    setShowSearchSection(!isShowSearchSection);
  };

  return (
    <>
      <div className="flex items-center justify-between px-20 py-3  bg-white sticky top-0 z-20 shadow">
        {isShowSearchSection && (
          <>
            <SearchBar />
            <style>{`
            body {
              overflow: hidden;
            }
          `}</style>
          </>
        )}
        <div className="flex items-center gap-8">
          <Link to={"/"}>
            <img
              src={`https://cdn.worldvectorlogo.com/logos/swiggy-1.svg`}
              alt="error"
              className="w-10 hover:scale-110 duration-500 rounded"
            />
          </Link>
          <p
            className="hover:text-yellow cursor-pointer"
            onClick={searchCityHandler}
          >
            {isCityName}
            <span className="pl-2">
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </p>
          {/* </Link> */}
        </div>
        <div>
          <ul className="flex gap-12">
            <li className="hover:text-yellow ">
              <Link to={"/SearchMenu"}>
                <p className="font-semibold">
                  <span className="pr-3">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  Search
                </p>
              </Link>
            </li>
            <li className="hover:text-yellow ">
              <a href="/" className="font-semibold">
                <span className="pr-3">
                  <i className="fa-solid fa-percent"></i>
                </span>
                Offers{" "}
                <sup className="text-yellow font-semibold text-sm">New</sup>
              </a>
            </li>
            <li className="hover:text-yellow ">
              <a href="/" className="font-semibold">
                <span className="pr-3">
                  <i className="fa-solid fa-circle-info"></i>
                </span>
                Help
              </a>
            </li>
            <li className="hover:text-yellow ">
              <Link to={"/Signin"}>
                <p className="font-semibold">
                  <span className="pr-3">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  {isName}
                </p>
              </Link>
            </li>
            <Link to={"/Checkout"}>
              <li className="hover:text-yellow font-semibold ">
                <span className="pr-3 relative">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="absolute -top-3 text-orange-500 ">
                    {isCartItem?.length ? isCartItem?.length : ""}
                  </span>
                </span>
                Cart
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
