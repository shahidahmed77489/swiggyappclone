import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import SearchMenu from "./components/SearchMenu";
import StoreDishesh from "./components/StoreDishesh";
import CartMenu from "./components/CartMenu";
import Header from "./components/Header";
import SigninPage from "./components/SiginPage";
import LoginPage from "./components/LoginPage";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./components/GlobalContextProvider";

function App() {
  const { getUserData, isLoginData, setCartId, setName } =
    useContext(GlobalContext);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    let data = window.sessionStorage.getItem("isLoggedIn");
    if (data) {
      setUserId(JSON.parse(data));
      getUserData();
    }
  }, []);

  useEffect(() => {
    const findData = isLoginData?.find((item) => item?.id === userId);
    setName(findData?.email);
    setCartId(findData?.id);
  }, [isLoginData]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signin" element={<SigninPage />} />
          <Route path="/Searchbar" element={<SearchBar />} />
          <Route path="/SearchMenu" element={<SearchMenu />} />
          <Route path="/FoodMenu" element={<StoreDishesh />} />
          <Route path="/Checkout" element={<CartMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
