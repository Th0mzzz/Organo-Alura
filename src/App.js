import { useState } from 'react';
import Banner from './components/banner/';
import { FormCards } from './components/form';
import { Cards } from './components/cards';
import { Footer } from './components/footer';
import { v4 as uuidv4 } from 'uuid'
// icons
import { MdOutlineAddToPhotos } from "react-icons/md";

function App() {
  const cardsInicial = [
    { id: uuidv4(), nome: "Thomaz", cargo: "Desenvolvedor Front-end", img: "https://github.com/th0mzzz.png", equipe: "Front-end", fav: false },
    { id: uuidv4(), nome: "Sophia", cargo: "Engenheira de Software", img: "https://github.com/sophiaAg.png", equipe: "Programação", fav: false },
  ]
  const [cards, setCard] = useState(cardsInicial)
  const [equipes, setEquipes] = useState([
    { id: uuidv4(), nome: "Programação", cor1: "#D9F7E9", cor2: "#57C278" },
    { id: uuidv4(), nome: "Front-end", cor1: "#E8F8FF", cor2: "#82CFFA" },
    { id: uuidv4(), nome: "Design", cor1: "#FAE9F5", cor2: "#DB6EBF" }
  ])
  const addingCard = (card) => {
    setCard([...cards, card])
  }
  const addingEquipe = (equipe) => {
    setEquipes([...equipes, equipe])
  }

  const deleteCard = (idCard) => {
    setCard(cards.filter(card => card.id !== idCard))
  }
  const favCard = (idCard) => {
    setCard(cards.map(card => {
      if (card.id === idCard) {
        card.fav === true
          ? card.fav = false
          : card.fav = true
      }
      return card
    }))
  }

  const changeColor = (color, id) => {
    setEquipes(equipes.map(equipe => {
      if (equipe.id === id) {
        equipe.cor1 = color
      }
      return equipe
    }))
  }
  const changeCardsColor = (color, id) => {
    setEquipes(equipes.map(equipe => {
      if (equipe.id === id) {
        equipe.cor2 = color
      }
      return equipe
    }))
  }
  const [show, setShow] = useState("")

  return (
    <div className="App">
      <Banner />
      <MdOutlineAddToPhotos 
            onClick={()=>{
                show === "show" ? setShow("") : setShow("show")
            }}
            title='Adicionar'
            />
      <FormCards show={show} cards={equipes} addCard={card => addingCard(card)} addEquipe={equipe => addingEquipe(equipe)} />
      {
        equipes.map(equipe =>
          <Cards
            key={equipe.id}
            infos={equipe}
            itens={cards.filter(card => card.equipe === equipe.nome)}
            onDelete={deleteCard}
            changeColor={changeColor}
            changeColorCards={changeCardsColor}
            favCard={favCard}
          />
        )}
      <Footer />
    </div>
  );
}

export default App;
