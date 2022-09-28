import React, { useState } from 'react';
import { bicycles } from '../../mocks/bicycles';
import './BicycleLista.css';
import BicycleListaItem from 'components/BicycleListaItem/BicycleListaItem';

export function BicycleLista() {
  const [bicycleSelecionada, setBicycleSelecionada] = useState({});

  return (
    <div className="BicycleLista">
      {bicycles.map((bicycle, index) => (
        <BicycleListaItem
          key={`BicycleListaItem-${index}`}
          bicycleSelecionada={bicycleSelecionada}
          bicycle={bicycle}
          index={index}
          setBicycleSelecionada={setBicycleSelecionada}
        ></BicycleListaItem>
      ))}
    </div>
  );
}
