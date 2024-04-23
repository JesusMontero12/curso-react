import MenuCategories from "./MenuCategories";
import { products } from "../../../data/productsMock.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuCategoriesContainer = () => {
  return <MenuCategories />;
};

export default MenuCategoriesContainer;
