import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GlobalContext } from "./GlobalContextProvider";

const Toprestaurant = () => {
  const { apiValue } = useContext(GlobalContext);
  var settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    timeout: 500,
    speed: 500,
    slidesToShow: 3.2,
    centerMode: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-[24px] mb-4  font-bold">
        {apiValue?.data?.data?.cards[1].card.card?.header?.title}
      </h2>

      <Slider {...settings}>
        {apiValue?.data?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="mx-3 overflow-hidden relative hover:scale-[0.97] duration-300 ">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_425,h_252/${item?.info?.cloudinaryImageId}`}
                    alt="error"
                    className="w-[273px] h-[182px] rounded-2xl  "
                  />
                  <h2 className="flex absolute left-2 top-36 text-[19px]  text-white font-bold">
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
                  <p>{item?.info?.cuisines.slice(0, 3) + ","}</p>
                  <p className="font-semibold">{item?.info?.areaName}</p>
                </div>
              </React.Fragment>
            );
          }
        )}
      </Slider>
    </div>
  );
};

export default Toprestaurant;
