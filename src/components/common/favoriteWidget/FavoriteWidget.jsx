import { Badge } from "@mui/material";

const FavoriteWidget = () => {
  const valorBadgeFavorite = 3;
  return (
    <>
      <a href="#">
        <Badge badgeContent={3} color="error">
          <img
            src="./src/assets/icons/heart.png"
            alt="icono de favoritos"
          ></img>
        </Badge>
      </a>
    </>
  );
};

export default FavoriteWidget;
