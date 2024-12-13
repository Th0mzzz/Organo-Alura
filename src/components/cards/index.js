import { Card } from './card'
import './cards.css'

export const Cards = (props) => {
    return (
        props.itens.length > 0 && <section className='cards-container' style={{ background: props.infos.cor1 }}>
            <h3 style={{ borderColor: props.infos.cor2 }}>{props.infos.nome}</h3>
            <div className='cards-row'>
                {
                    props.itens.map((card, index) => <Card key={index} infoCard={{ ...card, cor: props.infos.cor2 }} />)
                }
            </div>
        </section>
    )
}