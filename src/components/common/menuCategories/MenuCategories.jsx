import { Box, Link } from "@mui/material";
import "./MenuCategories.css";

const MenuCategories = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }} className="categorias">
        <Link href="#">Camisas</Link>
        <Link href="#">Pantalones</Link>
        <Link href="#">Zapatos</Link>
        <Link href="#">Vestidos</Link>
        <Link href="#">Shorts</Link>
        <Link href="#">Ropa Interior</Link>
        <Link href="#">Calcetines</Link>
        <Link href="#">Accesorios</Link>
        <Link href="#">Joyas</Link>
        <Link href="#">Chaquetas</Link>
        <Link href="#">Tops</Link>
        <Link href="#">Blusas</Link>
        <Link href="#">Blazer</Link>
        <Link href="#">Ropa para dormir</Link>
      </Box>
    </>
  );
};

export default MenuCategories;
