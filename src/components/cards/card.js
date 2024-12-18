import './cards.css';
import { AiFillDelete } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
export const Card = ({ infoCard, onDelete, favCard }) => {
    return (
        <div className='card'>
            <AiFillDelete size={20} className='deleteBtn' title='deletar card' onClick={() => onDelete(infoCard.id)} />
            <header style={{ background: infoCard.cor }}>
                <img src={infoCard.img} alt='imagem do card' className='img-card' />
            </header>
            <div className='text'>
                <h2>{infoCard.nome}</h2>
                <p>{infoCard.cargo}</p>
            </div>
            <div className={`fav-btn ${infoCard.fav === true ? "favorited" : "" }`} onClick={() => favCard(infoCard.id)}>
                {
                    infoCard.fav === true ?
                        <FaHeart /> :
                        <FaRegHeart />
                }
            </div>
        </div>
    )
}