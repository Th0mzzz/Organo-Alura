import { useState } from 'react';
import Banner from './components/banner/';
import { FormCards } from './components/form';
import { Cards } from './components/cards';
import { Footer } from './components/footer';
import { v4 as uuidv4 } from 'uuid'
function App() {
  const [cards, setCard] = useState([])
  const [equipes, setEquipes] = useState([
    { id: uuidv4(), nome: "Programação", cor1: "#D9F7E9", cor2: "#57C278" },
    { id: uuidv4(), nome: "Front-end", cor1: "#E8F8FF", cor2: "#82CFFA" },
    { id: uuidv4(), nome: "Design", cor1: "#FAE9F5", cor2: "#DB6EBF" }
  ])
  const addingCard = (card) => {
    setCard([...cards, card])
  }

  const deleteCard = (idCard) => {
    setCard([cards.filter(card => card.id !== idCard)])
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
  return (
    <div className="App">
      <Banner />
      <FormCards cards={equipes} addCard={card => addingCard(card)} />
      {
        equipes.map(equipe =>
          <Cards
            key={equipe.nome}
            infos={equipe}
            itens={cards.filter(card => card.equipe === equipe.nome)}
            onDelete={deleteCard}
            changeColor={changeColor}
            changeColorCards={changeCardsColor}
          />
        )}
      <Footer />
    </div>
  );
}

export default App;
