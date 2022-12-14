import './BicycleListaItem.css';

function BicycleListaItem({
  bicycleSelecionada,
  bicycle,
  index,
  setBicycleSelecionada,
  handleOpenModal,
}) {
  const removerItem = (i) => {
    const bicycle = {
      [i]: Number(bicycleSelecionada[i] || 0) - 1,
    };

    setBicycleSelecionada({ ...bicycleSelecionada, ...bicycle });
  };
  const adicionarItem = (i) => {
    const bicycle = {
      [i]: Number(bicycleSelecionada[i] || 0) + 1,
    };
    setBicycleSelecionada({ ...bicycleSelecionada, ...bicycle });
  };
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="BicycleListaItem__badge">
        {' '}
        {bicycleSelecionada[index]}{' '}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes_remover" onClick={() => removerItem(index)}>
        Remover
      </button>
    );
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <div className="BicycleListaItem">
      {badgeCounter(bicycleSelecionada[index], index)}
      <div>
        <div className="BicycleListaItemBrand">{bicycle.brand}</div>
        <div className="BicycleListaItemColor">{bicycle.color}</div>
        <div className="BicycleListaItemGears">{bicycle.gears}</div>
        <div className="BicycleListaItemPrice">
          {formatter.format(bicycle.price)}
        </div>
        <div>
          <button
            onClick={() => handleOpenModal(bicycle)}
            style={{
              backgroundColor: 'transparent',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <img
              className="BicycleListaItemImage"
              src={bicycle.model}
              alt={`Bicicleta da marca ${bicycle.brand} com o valor de ${bicycle.price} reais, do modelo ${bicycle.model}. `}
            />
          </button>
        </div>
        <div className="BicycleListaItemAcoes Acoes">
          <button
            className={`Acoes_adicionar ${
              !bicycleSelecionada[index] && 'Acoes_preencher'
            }`}
            onClick={() => adicionarItem(index)}
          >
            Adicionar ao carrinho
          </button>
          {removeButton(bicycleSelecionada[index], index)}
        </div>
      </div>
    </div>
  );
}

export default BicycleListaItem;
