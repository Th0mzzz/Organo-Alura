import { Card } from './card'
import './cards.css'

export const Cards = (props) => {
    return (
        props.itens.length > 0 && <section className='cards-container' style={{ background: props.infos.cor1 }}>
            <header className='btns'>
                <input type='color'
                    className='input-color' value={props.infos.cor1}
                    onChange={e => props.changeColor(e.target.value, props.infos.id)}
                    title='mudar cor da equipe'
                />
                <input type='color'
                    className='input-color'
                    value={props.infos.cor2}
                    onChange={e => props.changeColorCards(e.target.value, props.infos.id)}
                    title='mudar cor dos integrantes'
                />
            </header>
            <h3 style={{ borderColor: props.infos.cor2 }}>{props.infos.nome}</h3>
            <div className='cards-row'>
                {
                    props.itens.map((card, index) => {
                        return <Card
                            key={index}
                            infoCard={{ ...card, cor: props.infos.cor2 }}
                            onDelete={props.onDelete}
                        />
                    })
                }
            </div>
        </section>
    )
}