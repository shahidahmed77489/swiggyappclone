import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";
const SearchBar = () => {
  const [isSearchValue, setSearchValue] = useState("");
  //////
  const {
    setLatitude,
    setLongitude,
    setCityName,
    isShowSearchSection,
    setShowSearchSection,
  } = useContext(GlobalContext);
  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const closeBtn = () => {
    setShowSearchSection(!isShowSearchSection);
  };

  const [isSelectedPlaceId, setSelectedPlaceId] = useState(null);

  const searchCity = async () => {
    let url = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${isSearchValue}&types=`;
    try {
      const getData = await axios.get(url);
      setSelectedPlaceId(getData.data.data[0]?.place_id);
    } catch (error) {
      console.log(error);
    }
  };
  async function findLocationValue() {
    let url = `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${isSelectedPlaceId}`;
    try {
      const response = await axios.get(url);
      setCityName(response.data.data[0].formatted_address);
      setLatitude(response.data.data[0].geometry.location.lat);
      setLongitude(response.data.data[0].geometry.location.lng);
    } catch (error) {
      alert("city is not found");
    }
  }
  if (isSelectedPlaceId !== null) {
    findLocationValue();
    setShowSearchSection(!isShowSearchSection);
  }

  ///////////////////////////////////////////////////////////
  return (
    <div className="w-full h-[100vh] bg-darkBlue left-0 absolute top-0 ">
      <div className="w-1/3 bg-white h-[100vh] absolute z-20  ">
        <div className="w-[80%] mx-auto py-8">
          <span className="text-4xl cursor-pointer" onClick={closeBtn}>
            &times;
          </span>
          <div className="my-6">
            <input
              className="w-full outline-none border px-4 py-3 shadow-md text-xl "
              type="text"
              placeholder="Search For Area , Street Name..."
              onChange={inputHandler}
            />
            <button
              onClick={searchCity}
              className="border-2 px-4 py-2 mt-3 rounded text-red-400"
            >
              Search-City-Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
