import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [Nick, setNick] = useState('')
    const [Role, setRole] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Modo, setModo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            Nick,
            Role,
            Imagem,
            Modo,
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados  para criar o card do Jogador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nickname"
                    placeholder="Digite seu Nickname"
                    valor={Nick}
                    aoAlterado={valor => setNick(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Role"
                    placeholder="Digite sua role"
                    valor={Role}
                    aoAlterado={valor => setRole(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço de imagem"
                    valor={Imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Modo"
                    itens={props.times}
                    aoAlterado={valor =>setModo(valor)}

                />
                <Botao>
                    Adicionar Card
                </Botao>
            </form>
        </section>
    )

}
export default Formulario