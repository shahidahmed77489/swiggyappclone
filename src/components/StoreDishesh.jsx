import React from "react";
import { ShowMenuPage, ShowMenuPage2, ShowMenuPage3 } from "./ShowMenuPage";

const StoreDishesh = () => {
  return (
    <div className="my-12">
      <ShowMenuPage value={"0"} />
      <ShowMenuPage3 />
      <ShowMenuPage2 />
      <ShowMenuPage value={"2"} />
      <ShowMenuPage value={"3"} />
      <ShowMenuPage value={"4"} />
      <ShowMenuPage value={"5"} />
      <ShowMenuPage value={"6"} />
      <ShowMenuPage value={"7"} />
      <ShowMenuPage value={"8"} />
    </div>
  );
};

export default StoreDishesh;
