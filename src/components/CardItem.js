// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      {/* List item for the card */}
      <li className='cards__item'>
        {/* Link to navigate to the specified path */}
        <Link className='cards__item__link' to={props.path}>
          {/* Container for the image and label */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* Image for the card */}
            <img
              className='cards__item__img'
              alt='Travel Image' // Alt text for the image
              src={props.src} // Image source passed as prop
            />
          </figure>
          {/* Container for text information */}
          <div className='cards__item__info'>
            {/* Text description for the card */}
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}


export default CardItem;