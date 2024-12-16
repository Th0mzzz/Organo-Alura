import './form.css'
import Input from '../inputs/';
import Button from '../buttons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const FormCards = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [equipe, setEquipe] = useState('')

    const submitted = (e) => {
        e.preventDefault();
        props.addCard({ id: uuidv4(), nome, cargo, img, equipe })
        setNome("")
        setCargo("")
        setImg("")
        setEquipe("")
    }
    return (
        <section className='formcard-container'>
            <form onSubmit={submitted}>
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
        </section>
    )
}