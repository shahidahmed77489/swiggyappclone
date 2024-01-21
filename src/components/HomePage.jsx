import React from "react";
import Banner from "./Banner";
import SmallBanner from "./SmallBanner";
import Toprestaurant from "./Toprestaurant";
import FoodCart from "./FoodCart";
import FindRestaurant from "./FindRestaurant";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <div className="sticky top-0 z-10 bg-white"></div>
        <div className="w-[75%] mx-auto">
          {/* <Banner /> */}
          <SmallBanner />
          <div className="h-[2px] bg-slate-200 my-9"></div>
          <Toprestaurant />
          <div className="h-[2px] bg-slate-200 my-9"></div>
          {<FoodCart />}
          <div className="h-[2px] bg-slate-200 my-9"></div>
          <FindRestaurant isvalue={"6"} />
          <div className="h-[2px] bg-slate-200 my-9"></div>
          <FindRestaurant isvalue={"7"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
