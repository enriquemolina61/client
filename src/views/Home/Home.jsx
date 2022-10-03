import { BicycleLista } from 'components/BicycleLista/BicycleLista';
import NavBar from 'components/NavBar/NavBar';
import './Home.css';
import { useState } from 'react';
import { ModalCreate } from 'components/ModalCreate';

export function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleIsCreating = () => {
    setIsCreating(!isCreating);
  };
  const handleCreateConfirm = () => {
    console.log('Criado Porra');
  };

  return (
    <div className="Home">
      <NavBar handleCreateModal={handleIsCreating} />
      <div className="Home_container">
        <BicycleLista loading={loading} setLoading={setLoading} />
        <ModalCreate
          onRequestClose={handleIsCreating}
          contentLabel="Criando a bicicleta"
          isCreating={isCreating}
          handleCreateModal={handleIsCreating}
          handleCreateConfirm={handleCreateConfirm}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}
