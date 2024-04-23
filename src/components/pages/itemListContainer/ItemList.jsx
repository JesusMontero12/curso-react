import { Box, Grid } from "@mui/material";
import "./ItemList.css";
import ProductCard from "../../common/productCard/ProductCard.jsx";

const ItemList = ({ items, error }) => {
  return (
    <>
      <Box className="list_productos">
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

export default ItemList;
