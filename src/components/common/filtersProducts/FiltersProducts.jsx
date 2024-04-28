import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./FiltersProducts.css";

const FiltersProducts = () => {
  return (
    <>
      <Grid className="grid_content-product">
        <section className="content_filtros">
          <div className="filtros">
            <h2>Filtros</h2>
            <div className="container_categorias">
              <h3>
                Categoría<span>-</span>
              </h3>
              <div className="content_categorias">
                <div className="categoria">
                  <Link to="/genero/hombre">Ropa de hombre</Link>
                </div>
                <div className="categoria">
                  <Link to="/genero/mujer">Ropa de mujer</Link>
                </div>
                <div className="categoria">
                  <Link to="/genero/nino">Ropa de niños</Link>
                </div>
              </div>
            </div>
            <div className="container_ajustes">
              <h3>
                Tipo De Ajuste<span>-</span>
              </h3>
              <div className="content-ajustes">
                <div className="ajuste">
                  <Link to="/category/">Regular</Link>
                </div>
                <div className="ajuste">
                  <Link to="/category/">Oversized</Link>
                </div>
                <div className="ajuste">
                  <Link to="/category/">Suelto</Link>
                </div>
                <div className="ajuste">
                  <Link to="/category/">Ajustado</Link>
                </div>
              </div>
            </div>
            <div className="container_estilo">
              <h3>
                Estilo<span>-</span>
              </h3>
              <div className="content-estilo">
                <div className="estilo">
                  <Link to="/category/">Casual</Link>
                </div>
                <div className="estilo">
                  <Link to="/category/">Calle</Link>
                </div>
                <div className="estilo">
                  <Link to="/category/">Trabajo</Link>
                </div>
                <div className="estilo">
                  <Link to="/category/">Fiesta</Link>
                </div>
                <div className="estilo">
                  <Link to="/category/">Bohemio</Link>
                </div>
              </div>
            </div>
            <div className="container_tallas">
              <h3>
                Tallas<span>-</span>
              </h3>
              <div className="content-tallas">
                <div className="talla">
                  <Link to="/talla/u">U</Link>
                </div>
                <div className="talla">
                  <Link to="/talla/s">S</Link>
                </div>
                <div className="talla">
                  <Link to="/talla/m">M</Link>
                </div>
                <div className="talla">
                  <Link to="/talla/l">L</Link>
                </div>
                <div className="talla">
                  <Link to="/talla/xl">XL</Link>
                </div>
                <div className="talla">
                  <Link to="/talla/xxl">XXL</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Grid>
    </>
  );
};

export default FiltersProducts;
