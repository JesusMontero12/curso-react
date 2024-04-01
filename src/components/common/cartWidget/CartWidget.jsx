import { Badge } from "@mui/material";

const CartWidget = () => {
  const valorBadgeBag = 12;
  return (
    <>
      <a href="#">
        <Badge badgeContent={17} color="error">
          <img
            src="./src/assets/icons/bag.png"
            alt="icono de bolsa de compras"
          ></img>
        </Badge>
      </a>
    </>
  );
};

export default CartWidget;
