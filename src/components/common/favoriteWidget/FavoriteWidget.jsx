import { Badge } from "@mui/material";
import { useContext } from "react";
import { FavoritesContext } from "../../../context/FavoritesContext";

const FavoriteWidget = () => {
  const { fav } = useContext(FavoritesContext);
  let total = fav.length;
  return (
    <>
      <Badge badgeContent={total} color="error">
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
          alt="icono de favoritos"
        ></img>
      </Badge>
    </>
  );
};

export default FavoriteWidget;
