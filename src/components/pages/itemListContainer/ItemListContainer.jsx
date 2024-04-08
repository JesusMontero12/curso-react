import * as React from "react";
import {
  Box,
  Button,
  Grid,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import "./ItemListContainer.css";
import Counter from "../../common/counter/Counter";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import CategoriesSection from "../../common/categoriesSection/CategoriesSection.jsx";

const ItemListContainer = ({ greeting }) => {
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
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504140/proyects/vector/products/pantalones-jeans1-1_byytjp.jpg"
              product="Pantalón jeans Vaqueros"
              price="39.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712503788/proyects/vector/products/chaqueta-elegante1-1_xg6zwh.jpg"
              product="Chaqueta"
              price="41.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504496/proyects/vector/products/vestido-casual1-1_brj9r8.jpg"
              product="Vestido"
              price="49.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504616/proyects/vector/products/zapatos-casuales1-1_ghid1j.jpg"
              product="Zapatos casuales"
              price="29.742"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712503665/proyects/vector/products/calcetines1-1_ailnv8.jpg"
              product="Calcetines"
              price="9.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504445/proyects/vector/products/traje-de-bano1-1_rxoeus.jpg"
              product="Traje de baño"
              price="39.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712503972/proyects/vector/products/jersey1-1_ijybc2.jpg"
              product="Jersey"
              price="44.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504327/proyects/vector/products/sombrero1-1_ilhyge.jpg"
              product="Sombrero"
              price="25.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504019/proyects/vector/products/lentes1-1_y0klpg.jpg"
              product="Gafas de sol"
              price="10.990"
            />
          </Grid>
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712503521/proyects/vector/products/billetera1-1_bmhsuz.jpg"
              product="Billetera"
              price="19.990"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ItemListContainer;
