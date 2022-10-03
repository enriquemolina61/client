import './ModalCreate.css';
import Modal from 'react-modal';

export const ModalCreate = ({
  onRequestClose,
  style,
  contentLabel,
  isCreating,
  handleCreateModal,
  handleCreateConfirm,
}) => {
  return (
    <Modal
      isOpen={isCreating}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <h2 className="subtitle"> Create New Bicycle </h2>
      <div>
        <form action="">
          <label htmlFor="">Cor</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Marchas</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Marca</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Imagem</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Preço</label>
          <input type="text" name="" id="" />
        </form>
      </div>
      <div className="buttons-container">
        <button
          onClick={() => handleCreateConfirm()}
          className={'create-modal'}
        >
          Yes
        </button>
        <button onClick={handleCreateModal} version={'cancel-modal'}>
          Cancel
        </button>
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
