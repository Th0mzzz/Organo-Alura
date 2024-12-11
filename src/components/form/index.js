import './form.css'
import Input from '../inputs/';
import Button from '../buttons';
import { useState } from 'react';

export const FormCards = () => {
    const equipes = ["Programação", "Front-end"]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [equipe, setEquipe] = useState('')

    const submitted = (e) => {
        e.preventDefault();
        console.log('form submetido =>', { nome: nome, cargo: cargo, img: img, equipe:equipe })
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
                    itens={equipes}
                    required={true}
                    value={equipe}
                    onChanged={value => setEquipe(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}