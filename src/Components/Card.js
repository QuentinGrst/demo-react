import React, { useState } from 'react';

function Card({ person, onDelete }) {
  return (
    <div className='personCard'>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <div>
        <p>{`${person.name.first} ${person.name.last}`}</p>
        <p>{person.email}</p>
        <button className='close' onClick={onDelete}>
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Card;

