import React, { useState } from "react";
import { bicycles } from "mocks/bicycles";
import "./BicycleLista.css";

export function BicycleLista() {
  const [bicycleSelecionada, setBicycleSelecionada] = useState({});

const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="BicycleListaItem__badge"> {bicycleSelecionada[index]} </span>);

  const adicionarItem = (bicycleIndex) => {
    const bicycle = {
      [bicycleIndex]: Number(bicycleSelecionada[bicycleIndex] || 0) + 1,
    };
    setBicycleSelecionada({ ...bicycleSelecionada, ...bicycle });
  };
  return (
    <div className="BicycleLista">
      {bicycles.map((bicycle, index) => (
        <div className="BicycleListaItem" key={`BicycleLista-${index}`}>
          {badgeCounter(bicycleSelecionada[index], index)}
          <div>
            <div className="BicycleListaItemBrand">{bicycle.brand}</div>
            <div className="BicycleListaItemColor">{bicycle.color}</div>
            <div className="BicycleListaItemGears">{bicycle.gears}</div>
            <div className="BicycleListaItemModel">{bicycle.model}</div>
            <div className="BicycleListaItemPrice">{`R$ ${bicycle.price}`}</div>
            <div>
              <img
                className="BicycleListaItemImage"
                src={bicycle.image}
                alt={`Bicicleta da marca ${bicycle.brand} com o valor de ${bicycle.price} reais, do modelo ${bicycle.model}. `}
              />
            </div>
            <div className="BicycleListaItemAcoes Acoes">
              <button
                className="Acoes_adicionar Acoes_preencher"
                onClick={() => adicionarItem(index)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
