import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GlobalContext } from "./GlobalContextProvider";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { apiValue, setShowMenu } = useContext(GlobalContext);
  const navigate = useNavigate();

  //
  var settings = {
    dots: true,
    loop: true,
    infinite: true,
    slidesToShow: 2.1,
    centerMode: true,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const bannerBtn = (restaurantId) => {
    setShowMenu(restaurantId);
    navigate("/FoodMenu");
  };
  console.log(apiValue);
  return (
    <div className="my-7 ">
      <h1 className="text-[24px] mb-4  font-bold">Best Offers For You</h1>
      <Slider {...settings}>
        {apiValue?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info.map(
          (item, index) => {
            return (
              <React.Fragment key={item.id}>
                <div className="mx-2" onClick={() => bannerBtn(item?.entityId)}>
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_425,h_252/${item.imageId}`}
                    alt="error"
                  />
                </div>
              </React.Fragment>
            );
          }
        )}
      </Slider>
    </div>
  );
};

export default Banner;
