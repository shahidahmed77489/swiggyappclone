import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContextProvider";
import FilterHandlerPage from "./FilterHandlerPage";
import { useNavigate } from "react-router-dom";

const FoodCart = () => {
  const { apiValue, setShowFilterPage, isShowFilterPage, setShowMenu } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  if (
    !apiValue ||
    !apiValue.data ||
    !apiValue.data.data ||
    !apiValue.data.data.cards[5]
  ) {
    // Handle loading state or show an error message
    return (
      <div className="w-[20%] mx-auto">
        <div className="text-center w-32 h-32 border-2 border-t-red-600 animate-spin rounded-full ">
          <p>🌹🌹🌹</p>;
        </div>
      </div>
    );
  }
  const showFilterPage = () => {
    setShowFilterPage(!isShowFilterPage);
  };
  const menuHandler = (restaurantsId) => {
    setShowMenu(restaurantsId);

    navigate("/FoodMenu");
    window.scrollTo(0, 0);
  };
  const res =
    apiValue?.data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return (
    <>
      {isShowFilterPage && <FilterHandlerPage />}
      <div>
        <h2 className="text-[24px] mb-4  font-bold">
          {apiValue?.data?.data?.cards[3]?.card?.card?.title}
        </h2>
        <div className="mb-7">
          <button
            onClick={showFilterPage}
            className="border border-gray-300 px-5 py-1 rounded-2xl"
          >
            Filter
            <span>
              <i className="fa-solid fa-filter pl-2"></i>
            </span>
          </button>
        </div>
        <div className="grid  md:grid-cols-4 sm:grid-cols-2 gap-y-4 gap-x-8  ">
          {res?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="overflow-hidden  relative hover:scale-[0.97] duration-300"
                  onClick={() => menuHandler(item?.info?.id)}
                >
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_425,h_252/${item?.info?.cloudinaryImageId}`}
                    alt="error"
                    className="w-[220px] h-[147px] rounded-2xl"
                  />
                  <h2 className="flex absolute left-2 top-28 text-[18px] text-white font-bold">
                    {item?.info?.aggregatedDiscountInfoV3?.header}&nbsp;
                    {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                  </h2>
                  <h2 className="text-base my-2 font-semibold">
                    {item?.info?.name}
                  </h2>
                  <div className="flex gap-2 font-semibold">
                    <span>
                      <i className="fa-solid fa-star text-green-600"></i>
                    </span>
                    <p>{item?.info?.avgRatingString}</p>
                    <p>{item?.info?.sla?.deliveryTime}●mins</p>
                  </div>
                  <p>{item?.info?.cuisines?.slice(0, 3) + ","}</p>
                  <p>{item?.info?.areaName}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodCart;
