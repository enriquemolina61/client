import { BicycleLista } from "components/BicycleLista/BicycleLista";
import "./Home.css";
import carrinho from "assets/icons/carrinho.png";
import logo from "assets/logo.png";

export function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img
              src={logo}
              width="70px"
              alt="Logo Bicycle"
              className="Logo__icone"
            />
            <span className="Logo__titulo"> Molina Bicycles </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__carrinho Carrinho">
              <img
                src={carrinho}
                width="40px"
                className="Carrinho__icone"
                alt="Carrinho de Compras"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Home_container">
        <BicycleLista />
      </div>
    </div>
  );
}