import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SearchMenu = () => {
  const { isLatitude, isLongitude } = useContext(GlobalContext);
  const [isSearchValue, setSearchValue] = useState("");
  const [isRecipeData, setRecipeData] = useState([]);
  const [isDishesh, setDishesh] = useState([]);
  const refValue = useRef();
  const searchBtn = () => {
    setSearchValue(refValue.current.value);
  };

  var settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    timeout: 500,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };

  const getMenu = async () => {
    let url = `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${isLatitude}&lng=${isLongitude}`;
    try {
      const response = await axios.get(url);
      setDishesh(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);
  /////////

  async function findRecipeData() {
    let url = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${isLatitude}&lng=${isLongitude}&str=${isSearchValue}&trackingId=null`;
    try {
      const response = await axios.get(url);
      setRecipeData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let callApi = setTimeout(() => {
      findRecipeData();
    }, 0.9);
    return () => clearTimeout(callApi);
  }, [isSearchValue, isLatitude, isLongitude]);
  return (
    <>
      {/* <Header /> */}
      <div className="w-[65%] mx-auto my-10">
        <div className="my-2 relative">
          <input
            ref={refValue}
            type="text"
            placeholder="Search For Restaurants And Food"
            className="w-full border-gray-400 px-4 py-2 outline-none text-xl rounded-sm border"
            onChange={searchBtn}
          />
          <span className="absolute top-2.5 right-3 text-xl">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <div>
          {isDishesh && Object.keys(isDishesh).length && (
            <>
              <h2 className="text-2xl font-semibold my-4">
                {isDishesh?.cards[1]?.card?.card?.header?.title}
              </h2>

              <div className="my-6">
                <Slider {...settings}>
                  {isDishesh?.cards[1]?.card?.card?.imageGridCards?.info?.map(
                    (item, index) => {
                      return (
                        <div key={index}>
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_67,h_95/${item?.imageId}`}
                            alt="error"
                          />
                        </div>
                      );
                    }
                  )}
                </Slider>
              </div>
            </>
          )}
        </div>
        {Object.keys(isRecipeData).length && (
          <>
            <div>
              {isRecipeData?.data?.suggestions?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="hover:bg-slate-200 cursor-pointer px-3 py-2 flex items-center my-8 gap-4">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_64,c_fill/${item.cloudinaryId}`}
                        alt=""
                      />
                      <p>
                        {item?.cta?.text} <br />
                        <span>{item?.subCategory}</span>
                      </p>
                    </div>
                    <div></div>
                  </React.Fragment>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchMenu;
