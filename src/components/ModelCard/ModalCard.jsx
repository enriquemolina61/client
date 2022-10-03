import './ModalCard.css';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
// import { Api } from 'api/api';

export const ModalCard = ({
  onRequestClose,
  contentLabel,
  isCardOpen,
  handleOpenModal,
  style,
  bicycleSelecionada,
}) => {
  return (
    <Modal
      isOpen={isCardOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <h2 className="subtitle"> Bicicleta </h2>
      <div className="card-container">
        <span>Marca: {bicycleSelecionada.brand}</span>
        <span>Cor: {bicycleSelecionada.color}</span>
        <span>Marchas: {bicycleSelecionada.gears}</span>
        <span>R$ {bicycleSelecionada.price}</span>
      </div>

      <img src={bicycleSelecionada.model} alt="" className="image-card" />

      <div className="buttons-container">
        <button onClick={handleOpenModal} version={'cancel-modal'}>
          <AiOutlineClose size={30} />
        </button>
      </div>
    </Modal>
  );
};

ModalCard.defaultProps = {
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
