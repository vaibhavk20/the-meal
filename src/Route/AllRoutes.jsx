import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
// import Meal from "./Meal";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/meal" element={<Meal />}></Route> */}
      <Route path="/meal/:id" element={<Details />}></Route>
    </Routes>
  );
};

export default AllRoutes;
