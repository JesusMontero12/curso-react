import { useContext } from "react";
import Favorites from "./Favorites";
import { FavoritesContext } from "../../../context/FavoritesContext";

const FavoritesContainer = () => {
  const { fav, addToFav } = useContext(FavoritesContext);
  return <Favorites fav={fav} addToFav={addToFav} />;
};

export default FavoritesContainer;
