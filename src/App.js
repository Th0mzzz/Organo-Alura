import { useEffect, useState } from 'react';
import Banner from './components/banner/';
import { FormCards } from './components/form';
import { Cards } from './components/cards';
import { Footer } from './components/footer';
// icons
import { MdOutlineAddToPhotos } from "react-icons/md";
import Button from './components/buttons';

function App() {
  const [cards, setCard] = useState([])
  const [equipes, setEquipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/equipes")
      .then(r => r.json())
      .then(data => setEquipes(data))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/cards")
      .then(r => r.json())
      .then(data => setCard(data))
      .catch(error => console.error(error))
  }, [])


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
      <Button onClick={() => { show === "show" ? setShow("") : setShow("show") }} style={{ margin: "1.5rem", fontSize: "25px", marginLeft:"auto" }}>
        <MdOutlineAddToPhotos />
      </Button>
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
