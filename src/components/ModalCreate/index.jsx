import './ModalCreate.css';
import Modal from 'react-modal';
import { Api } from 'api/api';
export const ModalCreate = ({
  onRequestClose,
  style,
  contentLabel,
  isCreating,
  handleCreateModal,
  setLoading,
}) => {
  async function handleSubmit(event) {
    event.preventDefault();
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

    await Api.createBicycle(newbicycle);
    setLoading(true);
    handleCreateModal();
  }

  return (
    <Modal
      isOpen={isCreating}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className="modal-container">
        <h2 className="subtitle"> Create New Bicycle </h2>
        <div className="form-create">
          <form action="" onSubmit={handleSubmit} id="formcreate">
            <div className="cards-stats">
              <span>Cor </span>
              <input type="text" name="color" id="color" />
            </div>
            <div className="cards-stats">
              <label htmlFor="Marchas">Marchas </label>
              <input type="number" name="marcha" id="marcha" />
            </div>
            <div className="cards-stats">
              <label htmlFor="Marca">Marca </label>
              <input type="text" name="marca" id="marca" />
            </div>
            <div className="cards-stats">
              <label htmlFor="Imagem">Imagem </label>
              <input type="text" name="imagem" id="imagem" />
            </div>
            <div className="cards-stats">
              <label htmlFor="Preço">Preço </label>
              <input type="number" name="preco" id="preco" />
            </div>
          </form>
        </div>
        <div className="buttons-container">
          <button type="form" form="formcreate" className={'create-modal'}>
            Criar
          </button>
          <button onClick={handleCreateModal} version={'cancel-modal'}>
            Sair
          </button>
        </div>
      </div>
    </Modal>
  );
};

ModalCreate.defaultProps = {
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
