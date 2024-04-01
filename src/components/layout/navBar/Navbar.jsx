import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Grid, Badge, Box, AppBar, Toolbar, Typography } from "@mui/material";
import FavoriteWidget from "../../common/favoriteWidget/FavoriteWidget";
import NotificationsWidget from "../../common/notificationsWidget/NotificationsWidget";
import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#454545",
  border: "0.2px solid rgba(0, 0, 0, .1)",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "45px",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flesGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* ----- LOGO ----- */}
            <Typography
              variant="h6"
              component="div"
              className="logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <a href="./index.html">Vector</a>
            </Typography>
            {/* ----- ICONO MENU ----- */}
            <IconButton
              edge="start"
              color="#454545"
              aria-label="menu"
              sx={{ mr: 2, display: { sx: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* ----- Search ----- */}
            <Search
              className="content_search"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "rgba(0,0,0,.5)" }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Buscar..." />
            </Search>
            {/* ----- Menu ----- */}
            <Box>
              {/* {icono notificaciones} */}
              <IconButton>
                <NotificationsWidget />
              </IconButton>
              {/* {icono usuarios} */}
              <IconButton>
                <Badge badgeContent={0} color="error">
                  <img
                    src="./src/assets/icons/user.png"
                    alt="icono de usuario"
                  ></img>
                </Badge>
              </IconButton>
              {/* {icono carrito/bag} */}
              <IconButton>
                <CartWidget />
              </IconButton>
              {/* {icono favoritos} */}
              <IconButton>
                <FavoriteWidget />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;