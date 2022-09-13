import { bicycles } from 'mocks/bicycles';
import './BicycleLista.css';

export function BicycleLista(){
    return <div className='BicycleLista'>
        {bicycles.map((bicycle, index) => (
                <div className="BicycleListaItem">
                    <div>
                    <div className='BicycleListaItemBrand'>{bicycle.brand}</div>
                        <div className='BicycleListaItemColor'>{bicycle.color}</div>
                        <div className='BicycleListaItemGears'>{bicycle.gears}</div>
                        <div className='BicycleListaItemModel'>{bicycle.model}</div>
                        <div className='BicycleListaItemPrice'>{bicycle.price}</div>
                        <div>
                         <img className='BicycleListaItemImage' src={bicycle.image} alt={`Bicicleta da marca ${bicycle.brand} com o valor de ${bicycle.price} reais, do modelo ${bicycle.model}. `}/>
                        </div>
                        <div className='BicycleListaItemAcoes Acoes'>
                           <button className='Acoes_adicionar Acoes_preencher'>Adicionar ao carrinho</button>
                        </div>
                        
                    </div>
                </div>
        ))}
            </div>
}

