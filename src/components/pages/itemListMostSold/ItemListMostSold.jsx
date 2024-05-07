import * as React from "react";
import { Box, Grid, Skeleton, Stack } from "@mui/material";
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

      {items.length > 0 ? (
        <CategoriesSection />
      ) : (
        <div className="skeletonCategories">
          <Stack spacing={1} className="cartSkeletonCategories">
            <Skeleton variant="circular" width={180} height={180} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </Stack>
          <Stack spacing={1} className="cartSkeletonCategories">
            <Skeleton variant="circular" width={180} height={180} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </Stack>
          <Stack spacing={1} className="cartSkeletonCategories">
            <Skeleton variant="circular" width={180} height={180} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </Stack>
        </div>
      )}
      <Box className="list_productos">
        <h3>Lo más vendido</h3>
        <Grid container spacing={2} columns={16} className="content_producto">
          {items.length > 0 ? (
            items.map(
              ({ id, sale, imagen, nombre, descripcion, precio, desc }) => {
                return (
                  <Grid item lg={3} key={id}>
                    <ProductCard
                      id={id}
                      sale={sale}
                      imgUrl={imagen}
                      product={nombre}
                      description={descripcion}
                      price={precio}
                      desc={desc}
                    />
                  </Grid>
                );
              }
            )
          ) : (
            <div className="skeletonCard">
              <Stack spacing={1} className="cartSkeleton">
                <Skeleton variant="rounded" width={200} height={350} />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="60%"
                />
              </Stack>
              <Stack spacing={1} className="cartSkeleton">
                <Skeleton variant="rounded" width={200} height={350} />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="60%"
                />
              </Stack>
              <Stack spacing={1} className="cartSkeleton">
                <Skeleton variant="rounded" width={200} height={350} />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="60%"
                />
              </Stack>
              <Stack spacing={1} className="cartSkeleton">
                <Skeleton variant="rounded" width={200} height={350} />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="60%"
                />
              </Stack>
              <Stack spacing={1} className="cartSkeleton">
                <Skeleton variant="rounded" width={200} height={350} />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="60%"
                />
              </Stack>
            </div>
          )}

          {error && <h2>{error.message}</h2>}
        </Grid>
      </Box>
    </>
  );
};

export default ItemListMostSold;
