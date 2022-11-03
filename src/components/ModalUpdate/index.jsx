import './ModalUpdate.css';
import Modal from 'react-modal';
import { Api } from 'api/api';
export const ModalUpdate = ({
  onRequestClose,
  style,
  contentLabel,
  isCardOpen,
  handleUpdateModal,
  setLoading,
  bicycleSelecionada,
}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.color.value);
    const newbicycle = {
      color: event.target.color.value,
      gears: +event.target.marcha.value,
      brand: event.target.marca.value,
      model: event.target.imagem.value,
      price: +event.target.preco.value,
      sold: false,
    };
    if (
      !newbicycle.color.trim() ||
      !newbicycle.gears > 0 ||
      !newbicycle.brand.trim() ||
      !newbicycle.model.trim() ||
      !newbicycle.price > 0
    ) {
      console.log(newbicycle);
      return;
    }
    setLoading(true);
    await Api.updateBicycle(bicycleSelecionada.id, newbicycle);
    setLoading(false);
    // handleUpdateModal();
  }

  return (
    <Modal
      isOpen={isCardOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className="modal-container">
        <h2 className="subtitle"> Update Bicycle </h2>
        <div className="form-create">
          <form action="submit" onSubmit={handleSubmit} id="formcreate">
            <div className="cards-stats">
              <span>Cor </span>
              <input
                type="text"
                name="color"
                id="color"
                defaultValue={bicycleSelecionada.color}
              />
            </div>
            <div className="cards-stats">
              <label htmlFor="Marchas">Marchas </label>
              <input
                type="number"
                name="marcha"
                id="marcha"
                defaultValue={bicycleSelecionada.gears}
              />
            </div>
            <div className="cards-stats">
              <label htmlFor="Marca">Marca </label>
              <input
                type="text"
                name="marca"
                id="marca"
                defaultValue={bicycleSelecionada.brand}
              />
            </div>
            <div className="cards-stats">
              <label htmlFor="Imagem">Imagem </label>
              <input
                type="text"
                name="imagem"
                id="imagem"
                defaultValue={bicycleSelecionada.model}
              />
            </div>
            <div className="cards-stats">
              <label htmlFor="Preço">Preço </label>
              <input
                type="number"
                name="preco"
                id="preco"
                defaultValue={bicycleSelecionada.price}
              />
            </div>
          </form>
        </div>
        <div className="buttons-container">
          <button type="form" form="formcreate" className={'create-modal'}>
            Editar
          </button>
          <button onClick={handleUpdateModal} version={'cancel-modal'}>
            Sair
          </button>
        </div>
      </div>
    </Modal>
  );
};

ModalUpdate.defaultProps = {
  style: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '0px 50px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(25, 25, 25, 0.95)',
      borderRadius: '24px',
      border: 'none',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
};
