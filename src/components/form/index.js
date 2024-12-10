import './form.css'
import Input from '../inputs/';

export const FormCards = () => {
    return (
        <section className='formcard-container'>
            <form>
                <h2>Preencha os dados para criar um card</h2>
                <Input label="Nome" placeholder="Digite seu nome" />
                <Input label="Cargo" placeholder="Digite seu cargo" />
                <Input label="URL imagem" placeholder="Digite seu endereço da imagem" />
            </form>
        </section>
    )
}