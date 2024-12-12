import { useState } from 'react';
import Banner from './components/banner/';
import { FormCards } from './components/form';

function App() {
  const [card,setCard] = useState([])

  const addingCard = (card)=>{
    console.log(card)
  }
  return (
    <div className="App">
      <Banner/>
      <FormCards addCard={card => addingCard(card)}/>
    </div>
  );
}

export default App;
