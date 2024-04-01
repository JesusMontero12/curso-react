import * as React from "react";
import { Button, Grid, ToggleButtonGroup, Typography } from "@mui/material";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="greeting">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={10} md={8}>
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
  );
};

export default ItemListContainer;
