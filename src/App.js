import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/cards';

import poha from './images/poha.jpeg';

function App() {
  // Array of card data
  const cardData = [
    { image: poha, title: 'Poha', text: 'An Amazing Recipe of flattened rice.' }, // Use the imported image variable
    { image: 'https://via.placeholder.com/150', title: 'Card 2', text: 'This is the second card.' },
    { image: 'https://via.placeholder.com/150', title: 'Card 3', text: 'This is the third card.' },
    { image: 'https://via.placeholder.com/150', title: 'Card 2', text: 'This is the second card.' },
    { image: 'https://via.placeholder.com/150', title: 'Card 2', text: 'This is the second card.' },
    { image: 'https://via.placeholder.com/150', title: 'Card 2', text: 'This is the second card.' }
  ];

  return (
    <div className="App">
      <Navbar />

      <div className="container mt-4">
        <div className="row row-cols-3 g-4">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <Cards image={card.image} title={card.title} text={card.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;