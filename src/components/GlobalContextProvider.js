import axios from "axios";
import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext({});

const GlobalContextProvider = (props) => {
  const [isName, setName] = useState("SignIn");
  const [isFoodMenu, setFoodMenu] = useState([]);
  const [sortAttribute, setFilterSection] = useState([]);
  const [isCartItem, setCartItem] = useState([]);
  const [isShowMenu, setShowMenu] = useState("");
  const [isCartId, setCartId] = useState("");
  const [apiValue, setApivalue] = useState([]);
  const [isLatitude, setLatitude] = useState(null);
  const [isLongitude, setLongitude] = useState(null);
  const [isShowSearchSection, setShowSearchSection] = useState(false);
  const [isCityName, setCityName] = useState(
    "New Delhi, Jamia Nagar ,Okhla , Delhi"
  );
  const [isLoginData, setLoginData] = useState();
  const [cartValue, setcartValue] = useState([]);
  const [isPushCart, setPushCart] = useState([]);
  const [isShowFilterPage, setShowFilterPage] = useState(false);

  const getApiData = async () => {
    let url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${isLatitude}&lng=${isLongitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    try {
      const response = await axios.get(url);
      // console.log(response);
      setApivalue(response);
    } catch (error) {
      console.log(error);
    }
  };
  /////
  const getUserData = async () => {
    const url = "https://6558473de93ca47020a93d50.mockapi.io/todo/userinfo";
    try {
      const response = await axios.get(url);
      setLoginData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(isLoginData);
  //
  async function storeCart() {
    let sessionLogin = await isLoginData?.find((item) => item.id === isCartId);
    if (sessionLogin) {
      sessionLogin.cart = [...sessionLogin.cart, cartValue];
    }
    setPushCart(sessionLogin);
  }

  //
  useEffect(() => {
    getUserData();
    storeCart();
  }, [cartValue]);
  ////
  async function postCartData() {
    let url = `https://6558473de93ca47020a93d50.mockapi.io/todo/userinfo/${isCartId}`;
    if (isCartId) {
      try {
        const response = await axios.put(url, isPushCart);
        setCartItem(response?.data?.cart);
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    postCartData();
  }, [isPushCart, isLoginData]);
  /////
  const getUpdateApi = async () => {
    //
    const postData = {
      url: "https://www.swiggy.com/dapi/restaurants/list/update",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        lat: isLatitude,
        lng: isLongitude,
        filters: {
          isFiltered: true,
          facets: {},
          sortAttribute,
        },
        seoParams: {
          seoUrl: "https://www.swiggy.com/",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
        },
        page_type: "DESKTOP_WEB_LISTING",
        _csrf: "kemHIVSMjxHR-DQ5R2r4ObzNNSJefQaXsDwRKwRI",
      },
    };
    axios(postData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ///////////////

  const findNavigator = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };
  //

  const handleMenuPage = async () => {
    let url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${isLatitude}&lng=${isLongitude}&restaurantId=${isShowMenu}&catalog_qa=undefined&submitAction=ENTER`;
    try {
      const response = await axios.get(url);
      setFoodMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isShowMenu !== "") {
      handleMenuPage();
    }
  }, [isLatitude, isLongitude, isShowMenu]);

  // ,
  //
  useEffect(() => {
    getApiData();
  }, [isLatitude, isLongitude]);
  //
  useEffect(() => {
    findNavigator();
  }, []);
  return (
    <div>
      <GlobalContext.Provider
        value={{
          setcartValue,
          cartValue,
          apiValue,
          setLatitude,
          setLongitude,
          setCityName,
          isCityName,
          isLatitude,
          isLongitude,
          isShowSearchSection,
          setShowSearchSection,
          isShowFilterPage,
          setShowFilterPage,
          setShowMenu,
          isFoodMenu,
          getUpdateApi,
          setCartItem,
          getUserData,
          isCartItem,
          setFilterSection,
          isName,
          setName,
          isCartId,
          setCartId,
          isLoginData,
          setLoginData,
          setPushCart,
          isPushCart,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalContextProvider;
