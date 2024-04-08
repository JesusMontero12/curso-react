import * as React from "react";
import {
  Box,
  Button,
  Grid,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import "./ItemListContainer.css";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import CategoriesSection from "../../common/categoriesSection/CategoriesSection.jsx";

const ItemList = ({ greeting, items, error }) => {
  return (
    <>
      <div className="greeting">
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* {----- Contenedor de bienvenida -----} */}
          <Grid item xs={16} md={8}>
            {/* {----- Slogan -----} */}
            <Typography variant="h1" component="h2" className="h1Greating">
              {greeting}
            </Typography>
            {/* {----- Botón Tienda -----} */}
            <ToggleButtonGroup className="btnTienda">
              <Button>Tienda</Button>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </div>
      <CategoriesSection />
      <Box className="list_productos">
        <h3>Lo más vendido</h3>
        <Grid container spacing={2} columns={16} className="content_producto">
          {items.map(({ id, imagen, nombre, precio }) => {
            return (
              <Grid item lg={3} key={id}>
                <ProductCard
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

export default ItemList;
