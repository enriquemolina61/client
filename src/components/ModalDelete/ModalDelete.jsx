import './ModalDelete.css';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { Api } from 'api/api';

export const ModalDelete = ({
  onRequestClose,
  contentLabel,
  isCardOpen,
  handleDeleteModal,
  style,
  bicycleSelecionada,
  setLoading,
}) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const handleDelete = async (id) => {
    await Api.deleteBicycle(id);
    setLoading(true);
    handleDeleteModal();
  };

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
        <span> {formatter.format(bicycleSelecionada.price)}</span>
      </div>

      <img src={bicycleSelecionada.model} alt="" className="image-card" />

      <div className="buttons-container">
        <button
          className="close-bicycle"
          onClick={handleDeleteModal}
          version={'cancel-modal'}
        >
          <AiOutlineClose size={30} />
        </button>
        <button
          className="delete-bicycle"
          onClick={() => handleDelete(bicycleSelecionada.id)}
          version={'cancel-modal'}
        >
          Deletar
        </button>
      </div>
    </Modal>
  );
};

ModalDelete.defaultProps = {
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
