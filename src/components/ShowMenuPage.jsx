import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContextProvider";
import Slider from "react-slick";

export const ShowMenuPage = ({ value }) => {
  const { isFoodMenu, setcartValue, getUserData } = useContext(GlobalContext);
  const AddressDetails = isFoodMenu?.data?.cards[value]?.card?.card?.info;
  const menuDetails =
    isFoodMenu?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[value]
      ?.card?.card;

  const cartHandler = (id) => {
    let findData = menuDetails?.itemCards?.find(
      (item) => item?.card?.info?.id === id
    );
    setcartValue(findData?.card);
    getUserData();
  };

  return (
    <>
      <div className=" w-[60%] mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl ">{AddressDetails?.name}</h2>
            {AddressDetails?.cuisines?.map((item, index) => {
              return (
                <span className="text-gray-500" key={index}>
                  {item},
                </span>
              );
            })}
            <p className="text-gray-500">
              {AddressDetails?.areaName} ,{" "}
              <span>{AddressDetails?.sla?.lastMileTravelString}</span>
            </p>
            <p className="flex gap-2 text-gray-500">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${AddressDetails?.feeDetails?.icon}`}
                alt=""
                className="w-3 h-5"
              />
              {AddressDetails?.feeDetails?.message}
            </p>
          </div>
          <div className="border border-gray-200 p-2 rounded">
            <p>
              <span>
                <i className="fa-solid fa-star text-green-600"></i>
              </span>
              {AddressDetails?.avgRating}
            </p>
            <hr />
            <p>{AddressDetails?.totalRatingsString}</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">
            {menuDetails?.title} - {menuDetails?.itemCards?.length}
          </h1>
          <div>
            {menuDetails?.itemCards?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex justify-between my-9 ">
                    <div>
                      <p className="font-semibold">{item?.card?.info?.name}</p>
                      <p>₹{item?.card?.info?.price / 100}</p>
                      <p className="text-gray-500">
                        {item?.card?.info?.description}
                      </p>
                    </div>
                    <div className="w-[118px] h-24 relative">
                      <img
                        className="rounded-xl w-full h-full"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fit/${item?.card?.info?.imageId}`}
                        alt=""
                      />
                      <button
                        className="absolute -bottom-3 left-4 text-green-500 rounded bg-white px-7 border border-gray-300 py-1"
                        onClick={() => cartHandler(item?.card?.info?.id)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="h-2 w-full bg-gray-200"></div>
      </div>
    </>
  );
};
export const ShowMenuPage2 = () => {
  const { isFoodMenu } = useContext(GlobalContext);
  const cartHandler = (id) => {};

  let carousel =
    isFoodMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      .card?.card?.carousel;
  const title =
    isFoodMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.title;
  var settings = {
    dots: true,
    loop: true,
    infinite: true,
    slidesToShow: 2,
    // centerMode: true,
    autoplay: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-[60%] mx-auto">
        <h2 className="text-xl font-xl my-3">{title}</h2>
        <Slider {...settings}>
          {carousel?.map((item) => {
            return (
              <>
                <div className="mx-2 relative">
                  <img
                    className="rounded-2xl shadow-shaddddd"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_400/${item?.dish?.info?.imageId}`}
                    alt=""
                  />
                  <div className="absolute top-10  left-4 text-white">
                    <p className="text-2xl font-bold">
                      {item?.dish?.info?.name}
                    </p>
                    <p className="mt-2">{item?.dish?.info?.description}</p>
                  </div>
                  <div className="flex left-5  w-full justify-between  text-white absolute bottom-5">
                    <p>₹{item?.dish?.info?.defaultPrice / 100}</p>

                    <p>
                      <button
                        className="absolute block right-8 bottom-[0px] text-green-500 rounded bg-white px-7 border border-gray-300 py-1"
                        onClick={() => cartHandler(item?.bannerId)} ///// not work full
                      >
                        Add
                      </button>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export const ShowMenuPage3 = () => {
  const { isFoodMenu } = useContext(GlobalContext);
  var settings = {
    dots: true,
    loop: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-[60%] mx-auto my-5">
        <Slider {...settings}>
          {isFoodMenu?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
            (item) => {
              return (
                <>
                  <div className="border border-gray-400 py-2 pr-7 pl-3 rounded-xl mx-2">
                    <p className="flex gap-2 text-gray-600 font-extrabold">
                      <img
                        src={
                          item.info.logoBottom
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${item?.info?.logoBottom}`
                            : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart`
                        }
                        alt=""
                      />
                      {item?.info?.header}
                    </p>
                    <p className="text-gray-500 text-[12px] font-semibold">
                      <span>{item?.info?.couponCode}</span> |
                      <span>{item?.info?.description}</span>
                    </p>
                  </div>
                </>
              );
            }
          )}
        </Slider>
      </div>
    </>
  );
};
const ExportedComponents = { ShowMenuPage, ShowMenuPage2, ShowMenuPage3 };
export default ExportedComponents;
