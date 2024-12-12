import './cards.css'

export const Cards = (props) => {
    return (
        <section className='cards-container' style={{ background: props.infos.cor1 }}>
            <h3 style={{ borderColor: props.infos.cor2 }}>{props.infos.nome}</h3>
            <div className='cards-row'>

            </div>
        </section>
    )
}