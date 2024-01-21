import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";

const FilterHandlerPage = () => {
  const {
    apiValue,
    setShowFilterPage,
    isShowFilterPage,
    getUpdateApi,
    setFilterSection,
  } = useContext(GlobalContext);
  const showLeftSection = apiValue.data.data.cards[3].card.card.facetList;
  const [isTab, setTab] = useState("sort");
  const changeTabHandler = (label) => {
    setTab(label);
  };
  const closeModaal = () => {
    setShowFilterPage(!isShowFilterPage);
  };
  const checkBoxHandler = (e) => {
    setFilterSection(e.target.value);
  };
  const filterApplyBtn = () => {
    getUpdateApi();
  };
  const sortConfigs = apiValue?.data?.data?.cards[3]?.card?.card?.sortConfigs;
  const deliveryTime =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[0]?.facetInfo;
  const cuisines =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[1]?.facetInfo;
  const explore =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[2]?.facetInfo;
  const rating =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[3]?.facetInfo;
  const vegAndnon_veg =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[4]?.facetInfo;
  const offers =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[5]?.facetInfo;
  const costPrice =
    apiValue?.data?.data?.cards[3]?.card?.card?.facetList[6]?.facetInfo;
  return (
    <>
      <div>
        <div className="w-full h-[100vh] bg-darkBlue flex justify-center items-center z-50 fixed top-0 right-0">
          <div className="w-[50%] h-[55vh] bg-white rounded-xl relative overflow-auto ">
            <div className="flex justify-between bg-white sticky top-0 px-4 py-3.5 border-b-2">
              <h2 className="text-3xl  font-semibold sticky top-0 ">Filter</h2>
              <button className="text-4xl " onClick={closeModaal}>
                &times;
              </button>
            </div>
            <div className="flex">
              <div>
                <div className="px-6  border-r-2 ">
                  <button
                    className={`text-xl font-semibold ${
                      isTab === "sort" ? "text-red-500 " : ""
                    } `}
                    onClick={() => changeTabHandler("sort")}
                  >
                    Sort
                  </button>
                  {showLeftSection?.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="my-5">
                          <button
                            className={`text-xl font-semibold
                           ${isTab === item?.label ? "text-red-500 " : ""}
                          `}
                            onClick={() => changeTabHandler(item?.label)}
                          >
                            {item?.label}
                          </button>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <div className=" w-[74%] h-[59vh] overflow-auto pl-8 py-4 text-gray-400 text-xl ">
                {isTab === "sort" && (
                  <>
                    <h2 className="text-xl mb-5">Sort By</h2>
                    {sortConfigs.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3 my-4">
                            <input
                              type="radio"
                              name="sortAttribute"
                              onClick={(e) => checkBoxHandler(e)}
                              value={item?.key}
                            />
                            <p>{item?.title}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Delivery Time" && (
                  <>
                    {deliveryTime.map((item, index) => {
                      return (
                        <>
                          <div className="flex gap-3" key={index}>
                            <input
                              type="checkbox"
                              name="value"
                              onClick={(e) => checkBoxHandler(e)}
                              value={item?.id}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Cuisines" && (
                  <>
                    {cuisines.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3 my-4">
                            <input
                              type="checkbox"
                              name="value"
                              id="cuisines"
                              onClick={(e) => checkBoxHandler(e)}
                              value={item?.id}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Explore" && (
                  <>
                    {explore.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="checkbox"
                              onClick={(e) => checkBoxHandler(e)}
                              name="value"
                              value={item?.id}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Ratings" && (
                  <>
                    {rating.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3 my-4">
                            <input
                              type="checkbox"
                              onClick={(e) => checkBoxHandler(e)}
                              name="value"
                              id="rating"
                              value={item?.id}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Veg/Non-Veg" && (
                  <>
                    {vegAndnon_veg.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3 my-4">
                            <input
                              type="radio"
                              onClick={(e) => checkBoxHandler(e)}
                              name="value"
                              id="vegAndnon"
                              value={item?.id}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Offers" && (
                  <>
                    {offers.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="radio"
                              name="value"
                              value={item?.id}
                              id="offers"
                              onClick={(e) => checkBoxHandler(e)}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {isTab === "Cost for two" && (
                  <>
                    {costPrice.map((item) => {
                      return (
                        <>
                          <div className="flex gap-3 my-4">
                            <input
                              type="checkbox"
                              onClick={(e) => checkBoxHandler(e)}
                              id="costPrice"
                              name="value"
                              value={item?.id}
                            />
                            <p>{item?.label}</p>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
            <div className="px-2 shadow-inner text-center sticky bottom-0 bg-white py-2">
              <button
                className="bg-orange text-white w-[25%] py-1 text-xl rounded-2xl"
                onClick={filterApplyBtn}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterHandlerPage;
