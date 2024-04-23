import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import NotFound from "./components/pages/notFound/NotFound";
import CartContainer from "./components/pages/cart/CartContainer";
import LoginContainer from "./components/pages/login/LoginContainer";
import FavoritesContainer from "./components/pages/favorites/FavoritesContainer";
import ItemListMostSoldContainer from "./components/pages/itemListMostSold/ItemListMostSoldContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListMostSoldContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/favorites" element={<FavoritesContainer />} />
          <Route path="/shop" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
