import './cards.css';

export const Card = ({ infoCard }) => {
    return (
        <div className='card'>
            <header style={{ background: infoCard.cor }}>
                <img src={infoCard.img} alt='imagem do card' className='img-card' />
            </header>
            <div className='text'>
                <h2>{infoCard.nome}</h2>
                <p>{infoCard.cargo}</p>
            </div>
        </div>
    )
}