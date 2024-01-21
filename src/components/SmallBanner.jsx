import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GlobalContext } from "./GlobalContextProvider";

const SmallBanner = () => {
  const { apiValue } = useContext(GlobalContext);
  var settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    timeout: 500,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="text-[24px] mb-4  font-bold">
        {apiValue?.data?.data?.cards[0].card.card?.header?.title}
      </h2>

      <Slider {...settings}>
        {apiValue?.data?.data?.cards[0].card.card?.imageGridCards?.info?.map(
          (item, index) => {
            return (
              <React.Fragment key={item.id}>
                <div className="mx-3">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_425,h_252/${item.imageId}`}
                    alt="error"
                    className="w-[144px] h-[180px]"
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

export default SmallBanner;
