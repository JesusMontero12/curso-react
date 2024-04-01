import { Badge, IconButton } from "@mui/material";

const NotificationsWidget = () => {
  return (
    <>
      <a href="#">
        <Badge badgeContent={4} color="error">
          <img
            id="notificaciones"
            src="./src/assets/icons/notificacion.png"
            alt="icono de notificaciones"
          ></img>
        </Badge>
      </a>
      <div id="plegableNotificacion"></div>
    </>
  );
};

export default NotificationsWidget;
