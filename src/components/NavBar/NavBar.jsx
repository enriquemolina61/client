import './NavBar.css';

import logo from 'assets/logo.png';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { ActionMode } from 'constants/index';
import { FaRegTrashAlt } from 'react-icons/fa';
function NavBar({ handleCreateModal, handleActionMode, modoAtual }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo Bicycle"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> Molinas Bicycles </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__Create">
            <button
              onClick={
                modoAtual === 'NORMAL'
                  ? handleCreateModal
                  : () => window.alert('Volte para o modo normal!')
              }
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <AiOutlinePlus size={30} />
            </button>

            <button
              onClick={() => handleActionMode(ActionMode.ATUALIZAR)}
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <MdOutlineModeEditOutline
                size={30}
                color={modoAtual === 'ATUALIZAR' ? 'red' : 'BLACK'}
              />
            </button>

            <button
              onClick={() => handleActionMode(ActionMode.DELETAR)}
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <FaRegTrashAlt
                size={30}
                color={modoAtual === 'DELETAR' ? 'red' : 'BLACK'}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
