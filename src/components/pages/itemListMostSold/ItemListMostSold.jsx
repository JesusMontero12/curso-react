import * as React from "react";
import { Box, Grid } from "@mui/material";
import "./ItemListMostSold.css";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import CategoriesSection from "../../common/categoriesSection/CategoriesSection.jsx";
import Home from "../home/Home.jsx";

const ItemListMostSold = ({ items, error }) => {
  const Slogan =
    "Damos la bienvenida a tu nuevo armario. ¡Prepárate para lucir increíble!";
  return (
    <>
      <Home greeting={Slogan} />
      <CategoriesSection />
      <Box className="list_productos">
        <h3>Lo más vendido</h3>
        <Grid container spacing={2} columns={16} className="content_producto">
          {items.map(({ id, imagen, nombre, precio }) => {
            return (
              <Grid item lg={3} key={id}>
                <ProductCard
                  id={id}
                  imgUrl={imagen[0]}
                  product={nombre}
                  price={precio}
                />
              </Grid>
            );
          })}
          {error && <h2>{error.message}</h2>}
        </Grid>
      </Box>
    </>
  );
};

export default ItemListMostSold;
