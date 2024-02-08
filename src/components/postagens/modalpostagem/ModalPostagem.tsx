import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'
import FormularioPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='<div className="inline-block text-white font-bold py-2 px-4
      rounded-full bg-gradient-to-r from-gray-500
       to-purple-800 border border-transparent transform hover:scale-110
       hover:border-black transition-transform duration-3000 ease-in-out">
        '>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;