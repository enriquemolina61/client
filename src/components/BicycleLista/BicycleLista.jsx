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
      Api.createBicycle({
        color: 'Blue',
        gears: 200,
        brand: 'Flavio',
        model:
          'https://github.com/enriquemolina61/client/blob/master/src/assets/images/kisspng-mountain-bike-bicycle-forks-mongoose-cycling-nakamura-pristine-junior-24-mountain-bike-2017-5b666a4c8db382.8280157215334385405804.png?raw=true',
        price: 150000,
        sold: false,
      });
      const bicycleList = await Api.getAllBicycle();
      setBicycles(() => bicycleList);
      setLoading(false);
    }
    bla();
  }, []);
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
