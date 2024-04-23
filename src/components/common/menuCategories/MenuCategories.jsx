import { Box } from "@mui/material";
import "./MenuCategories.css";
import { Link } from "react-router-dom";

const MenuCategories = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }} className="categorias">
        <Link to="/category/camisas">Camisas</Link>
        <Link to="/category/calzado">Zapatos</Link>
        <Link to="/category/vestidos">Vestidos</Link>
        <Link to="/category/shorts">Shorts</Link>
        <Link to="/category/calcetines">Calcetines</Link>
        <Link to="/category/accesorios">Accesorios</Link>
        <Link to="/category/pantalones">pantalones</Link>
        <Link to="/category/chaquetas">Chaquetas</Link>
        <Link to="/category/ropadeportiva">Ropa Deportiva</Link>
        <Link to="/category/blusas">Blusas</Link>
        <Link to="/category/blazer">Blazer</Link>
        <Link to="/category/ropadedormir">Ropa para dormir</Link>
      </Box>
    </>
  );
};

export default MenuCategories;
