import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContextProvider";

const CartMenu = () => {
  const { isCartItem } = useContext(GlobalContext);
  // console.log(isCartItem);
  useEffect(() => {}, [isCartItem]);
  const logoutBtn = () => {
    window.sessionStorage.clear();
    console.log("logout");
  };
  console.log(isCartItem);
  return (
    <>
      <div className="sticky top-0 "></div>
      <div className="bg-green-100 h-[100%]">
        <div className=" w-[85%]  mx-auto  ">
          <div className="flex gap-5 py-10">
            <div className="bg-white w-[70%] h-[500px] p-10">
              <div>
                <h2 className="font-semibold text-2xl">
                  Add a delivery address
                </h2>
                <p className="text-gray-400">
                  You seem to be in the new location
                </p>
              </div>
              <div className="border border-dashed w-[50%] mt-5 p-6">
                <h2>Add New Address</h2>
                <p>
                  M4C4+9MV, Police Colony, A 3 Block, Paschim Vihar, Delhi,
                  110063, India
                </p>
                <button className="border border-green-500 px-10 py-2 mt-16 text-green-500 font-semibold">
                  Add New
                </button>
              </div>
              <button
                className="border border-green-500 px-10 py-2 mt-16 text-green-500 font-semibold"
                onClick={logoutBtn}
              >
                Log Out
              </button>
            </div>

            <div>
              {isCartItem?.map((item) => {
                return (
                  <>
                    <div className=" bg-white mb-2  px-6 py-4">
                      <div className="flex items-center gap-5 ">
                        <div>
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${item?.info?.imageId}`}
                            alt=""
                          />
                        </div>
                        <div>
                          <span>{item?.info?.name} </span>
                          <div> Category: {item?.info?.category}</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">
                          To Pay Amount- ₹{item?.info?.price / 100}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
