import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border-transparent 
            flex flex-col rounded overflow-hidden justify-between bg-gray-200'>
                
            <div>
            
                <div className="flex flex-col shadow-xlpy-6 px-14 bg-gradient-to-tr from-violet-500 to-gray-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
                    <img src="" className='h-12 rounded-full' alt={postagem.usuario?.nome} />
                    <h3 className='text-bg-gray-800-lg font-bold text-center uppercase'>{postagem.usuario?.nome}</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="center">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full py-3 bg-violet-400 text-white rounded-lg text-xl focus:outline-none focus:ring-1
                     focus:ring-violet-500 focus:border-transparent shadow-lg  hover:bg-violet-800 '>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='py-3 bg-red-400 text-white rounded-lg text-xl focus:outline-none focus:ring-2
                    focus:ring-red-500 focus:border-transparent shadow-lg  hover:bg-red-700 w-full'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem