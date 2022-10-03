import { BicycleLista } from 'components/BicycleLista/BicycleLista';
import NavBar from 'components/NavBar/NavBar';
import './Home.css';
import { useState } from 'react';
import { ModalCreate } from 'components/ModalCreate';
import { ModalCard } from 'components/ModelCard/ModalCard';

export function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [isCardOpen, setisCardOpen] = useState(false);
  const [bicycleSelecionada, setBicycleSelecionada] = useState({});
  const [loading, setLoading] = useState(true);
  const handleIsCreating = () => {
    setIsCreating(!isCreating);
  };
  const handleIsOpen = (bicycle) => {
    setisCardOpen(!isCardOpen);
    setBicycleSelecionada(bicycle);
  };

  return (
    <div className="Home">
      <NavBar handleCreateModal={handleIsCreating} />
      <div className="Home_container">
        <BicycleLista
          loading={loading}
          setLoading={setLoading}
          handleOpenModal={handleIsOpen}
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
      </div>
    </div>
  );
}
