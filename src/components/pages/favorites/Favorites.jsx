import { Box, Grid } from "@mui/material";
import "./Favorites.css";
import ProductCard from "../../common/productCard/ProductCard";

const Favorites = ({ fav }) => {
  return (
    <>
      <Box className="list_favorites">
        {fav.length > 0 && <h3>Mi Colección Personalizada</h3>}
        <Grid container spacing={2} columns={16} className="content_favorites">
          {fav.length > 0 ? (
            fav.map((product) => (
              <Grid item lg={3} key={product.id}>
                <ProductCard
                  id={product.id}
                  sale={product.sale}
                  imgUrl={product.imagen}
                  product={product.nombre}
                  description={product.descripcion}
                  price={product.precio}
                  desc={product.desc}
                />
              </Grid>
            ))
          ) : (
            <div className="containerFavCero">
              <h1 className="favCero">
                No tienes ningún producto agregado a favoritos.
              </h1>
            </div>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Favorites;
