import { useState } from 'react';
import Banner from './components/banner/';
import { FormCards } from './components/form';
import { Cards } from './components/cards';
import { Footer } from './components/footer';

function App() {
  const [cards, setCard] = useState([])
  const equipes = [
    { nome: "Programação", cor1: "#D9F7E9", cor2: "#57C278" },
    { nome: "Front-end", cor1: "#E8F8FF", cor2: "#82CFFA" },
    { nome: "Design", cor1: "#FAE9F5", cor2: "#DB6EBF" }
  ]
  const addingCard = (card) => {
    setCard([...cards, card])
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
          />)
      }
      <Footer />
    </div>
  );
}

export default App;
