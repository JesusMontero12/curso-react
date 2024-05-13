import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const isInFav = (id) => {
    return fav.some((product) => product.id === id);
  };

  const addToFav = (product) => {
    const productIndex = fav.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedFav = [...fav];
      updatedFav.splice(productIndex, 1);
      setFav(updatedFav);
    } else {
      setFav([...fav, { ...product, Add: true }]);
    }
  };

  let data = {
    fav,
    addToFav,
  };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
