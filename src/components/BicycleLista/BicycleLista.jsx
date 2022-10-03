import React, { useState, useEffect } from 'react';
// import { bicycles } from '../../mocks/bicycles';
import { Api } from '../../api/api';
import './BicycleLista.css';
import BicycleListaItem from 'components/BicycleListaItem/BicycleListaItem';

export function BicycleLista() {
  const [bicycleSelecionada, setBicycleSelecionada] = useState({});
  const [bicycles, setBicycles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function bla() {
      const bicycleList = await Api.getAllBicycle();
      setBicycles(() => bicycleList);
      setLoading(false);
    }
    bla();
  }, []);
  console.log(loading);
  if (loading)
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  console.log(bicycles);
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
