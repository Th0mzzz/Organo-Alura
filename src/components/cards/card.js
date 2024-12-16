import './cards.css';
import { AiFillDelete } from "react-icons/ai";
export const Card = ({ infoCard, onDelete }) => {
    return (
        <div className='card'>
            <AiFillDelete size={20} className='deleteBtn' title='deletar card' onClick={onDelete(infoCard.id)} />
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