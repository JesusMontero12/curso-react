import { Badge } from "@mui/material";

const CartWidget = () => {
  const valorBadgeBag = 12;
  return (
    <>
      <Badge badgeContent={17} color="error">
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/bag_n9fyub.png"
          alt="icono de bolsa de compras"
        ></img>
      </Badge>
    </>
  );
};

export default CartWidget;
