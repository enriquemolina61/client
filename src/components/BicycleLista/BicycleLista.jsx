import React, { useState, useEffect } from 'react';
// import { bicycles } from '../../mocks/bicycles';
import { Api } from '../../api/api';
import './BicycleLista.css';
import BicycleListaItem from 'components/BicycleListaItem/BicycleListaItem';

export function BicycleLista({ loading, setLoading }) {
  const [bicycleSelecionada, setBicycleSelecionada] = useState({});
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    async function bikeList() {
      const bicycleList = await Api.getAllBicycle();
      setBicycles(() => bicycleList);
      setLoading(false);
    }
    if (loading) bikeList();
  }, [loading, setLoading]);

  if (loading)
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );

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
