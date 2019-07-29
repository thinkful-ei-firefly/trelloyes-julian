import React from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';


function App() {
  const cardList = STORE.lists.map(card =>
    <List key={card.id} header={card.header} cards={card.cardIds.map(card => STORE.allCards[card])} />
    )
  return (
    <main className='app'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {cardList}
      </div>
    </main>
  );
}

export default App;
