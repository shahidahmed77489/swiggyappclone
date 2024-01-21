import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContextProvider";

const FindRestaurant = ({ isvalue }) => {
  const { apiValue } = useContext(GlobalContext);
  const restaurantBtnData =
    apiValue?.data?.data?.cards[isvalue]?.card?.card?.brands;

  return (
    <>
      <div className="mt-4">
        <h2 className="text-3xl font-semibold mb-2">
          {apiValue?.data?.data?.cards[isvalue]?.card?.card?.title}
        </h2>
        <div className="grid grid-cols-4">
          {restaurantBtnData?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="mr-4 my-2">
                  <button className="border border-gray-300 py-2 rounded text-gray-500  w-full">
                    {item?.text.slice(0, 30) + "..."}
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FindRestaurant;
