// Import necessary modules and components
import React from 'react';
import './Cards.css'; 
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* Main heading for the cards section */}
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* List of CardItem components for the first set of cards */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg' // Image source for the card
              text='Explore the hidden waterfall deep inside the Amazon Jungle' // Description text
              label='Adventure' // Label for the card
              path='/services' // Path for the link
            />
            <CardItem
              src='images/img-2.jpg' // Image source for the card
              text='Travel through the Islands of Bali in a Private Cruise' // Description text
              label='Luxury' // Label for the card
              path='/services' // Path for the link
            />
          </ul>
          {/* List of CardItem components for the second set of cards */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg' // Image source for the card
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters' // Description text
              label='Mystery' // Label for the card
              path='/services' // Path for the link
            />
            <CardItem
              src='images/img-4.jpg' // Image source for the card
              text='Experience Football on Top of the Himilayan Mountains' // Description text
              label='Adventure' // Label for the card
              path='/products' // Path for the link
            />
            <CardItem
              src='images/img-8.jpg' // Image source for the card
              text='Ride through the Sahara Desert on a guided camel tour' // Description text
              label='Adrenaline' // Label for the card
              path='/sign-up' // Path for the link
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards;