import { BicycleLista } from 'components/BicycleLista/BicycleLista';
import NavBar from 'components/NavBar/NavBar';
import './Home.css';
import { useState } from 'react';
import { ModalCreate } from 'components/ModalCreate';
import { ModalCard } from 'components/ModalCard/ModalCard';
import { ModalUpdate } from 'components/ModalUpdate';
import { ActionMode } from 'constants/index';

export function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [isCardOpen, setisCardOpen] = useState(false);
  const [isCardUpdating, setCardUpdating] = useState(false);
  const [bicycleSelecionada, setBicycleSelecionada] = useState({});
  const [loading, setLoading] = useState(true);
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOnClick = (bicycle) => {
    setBicycleSelecionada(bicycle);
    if (modoAtual === 'NORMAL') {
      handleIsOpen();
    } else if (modoAtual === 'ATUALIZAR') {
      handleUpdateModal();
    } else {
      handleDeleteModal();
    }
  };

  const handleIsCreating = () => {
    setIsCreating(!isCreating);
  };

  const handleIsOpen = () => {
    setisCardOpen(!isCardOpen);
  };

  const handleUpdateModal = () => {
    setCardUpdating(!isCardUpdating);
  };
  const handleDeleteModal = () => {
    setIsDeleting(!isDeleting);
  };

  return (
    <div className="Home">
      <NavBar handleCreateModal={handleIsCreating} />
      <div className="Home_container">
        <BicycleLista
          loading={loading}
          setLoading={setLoading}
          handleOpenModal={handleOnClick}
        />
        <ModalCreate
          onRequestClose={handleIsCreating}
          contentLabel="Criando a bicicleta"
          isCreating={isCreating}
          handleCreateModal={handleIsCreating}
          setLoading={setLoading}
        />
        <ModalCard
          onRequestClose={handleIsOpen}
          contentLabel="Abrindo a bicicleta"
          isCardOpen={isCardOpen}
          handleOpenModal={handleIsOpen}
          bicycleSelecionada={bicycleSelecionada}
        />
        <ModalUpdate
          onRequestClose={handleUpdateModal}
          contentLabel="Editando Bicicleta"
          isCardOpen={isCardUpdating}
          handleUpdateModal={handleUpdateModal}
          setLoading={setLoading}
          bicycleSelecionada={bicycleSelecionada}
        />
      </div>
    </div>
  );
}
