import './form.css'
import Input from '../inputs/';
import Button from '../buttons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
export const FormCards = (props) => {
    // card
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [equipe, setEquipe] = useState('')

    const postCard = (e) => {
        e.preventDefault();
        props.addCard({ id: uuidv4(), nome, cargo, img, equipe, fav: false })
        setNome("")
        setCargo("")
        setImg("")
        setEquipe("")
    }
    // equipe

    const [nomeEquipe, setNomeEquipe] = useState("")
    const [cor1, setCor1] = useState("")
    const [cor2, setCor2] = useState("")

    const postEquipe = (e) => {
        e.preventDefault();
        props.addEquipe({ id: uuidv4(), nome: nomeEquipe, cor1, cor2 })
        setNomeEquipe("")
        setCor1("")
        setCor2("")
        console.log(props.cards)

    }
    return (


        <section className={`formcard-container ${props.show}`}>
            <form onSubmit={postCard}>
                <h2>Preencha os dados para criar um card</h2>
                <Input
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    value={nome}
                    onChanged={value => setNome(value)}
                />
                <Input
                    type="text"
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    value={cargo}
                    onChanged={value => setCargo(value)}
                />
                <Input
                    type="text"
                    label="URL imagem"
                    placeholder="Digite seu endereço da imagem"
                    required={true}
                    value={img}
                    onChanged={value => setImg(value)}
                />

                <Input
                    type="select"
                    label="Selecione a equipe"
                    itens={props.cards}
                    required={true}
                    value={equipe}
                    onChanged={value => setEquipe(value)}
                />
                <Button type="submit">
                    Criar card
                </Button>
            </form>
            <form onSubmit={postEquipe}>
                <h2>Preencha os dados para criar uma equipe </h2>
                <Input
                    type="text"
                    label="Nome da equipe"
                    placeholder="Digite o nome da equipe"
                    required={true}
                    value={nomeEquipe}
                    onChanged={value => setNomeEquipe(value)}
                />
                <Input
                    type="color"
                    label="Cor de fundo"
                    placeholder="Coloque a cor de fundo da equipe"
                    required={true}
                    value={cor1}
                    onChanged={value => setCor1(value)}
                />
                <Input
                    type="color"
                    label="Cor da equipe"
                    placeholder="Coloque a cor dos cards da equipe"
                    required={true}
                    value={cor2}
                    onChanged={value => setCor2(value)}
                />

                <Button type="submit">
                    Criar equipe
                </Button>
            </form>
        </section>


    )
}