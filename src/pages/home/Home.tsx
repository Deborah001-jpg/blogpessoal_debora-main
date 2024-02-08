import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {

    return (
        <>
            <div id="container" className='bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100'>

                <div id="subcontainer" className='container grid grid-cols-2 text-purple-900 '>

                    <div id="texto" className=">
                        flex
                        flex-col
                        gap-4
                        items-center
                        justify-center
                        font-family-sans-italic
                        py-4">
                        <h2 className=" 
                        text-7xl
                        font-bold
                        "> Diário de Alice </h2>
                        <p className='p'>"Reflexões Cotidianas: O Mundo Interior ."</p>


                        <div className="flex justify-around gap-4">
                            <ModalPostagem />

                        
                            


                        </div>
                    </div>


                    <div id="imagem" className="flex justify-items-center">
                        <img
                            src="src/assets/img/GatoHome.png"
                            alt="Imagem da pagina Home"
                            className="w-10/12"


                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />

        </>

    )
}

export default Home;
