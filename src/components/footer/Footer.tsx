
import { FacebookLogo, GithubLogo, LinkedinLogo } from "phosphor-react"
import { useContext, ReactNode } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {


    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        component = (

        <div className="flex justify-center bg-white-400 text-violet-800 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>Blog pessoal Diário de Alice | Feito por: Débora Rodrigues </p>
                <p className='text-lg'>Acesse nossas redes sociais</p>
                <div className='flex gap-1'>
                    <a href="https://www.linkedin.com/in/deborah-rodrigues001" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={40} weight='bold' />
                    </a>
                    <a href="https://www.facebook.com/deborah.rodrigues.92775" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={40} weight='bold' />
                    </a>
                    <a href="https://github.com/Deborah001-jpg" target="_blank" rel="noopener noreferrer">
                        <GithubLogo size={40} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    )
}

return (
    <>
        {component}
    </>
)
}

export default Footer