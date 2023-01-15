import React, { useState } from 'react';
import Card from '../Components/Card';


function Names() {
  const [namesList, setNamesList] = useState([]);
  const [displayType, setDisplayType] = useState('card'); // this variable to control the display type
  const fetchAddNewLine = async () => {
    const response = await fetch("https://randomuser.me/api");
    const result = await response.json();
    setNamesList(namesList.concat([result.results[0]]));
  }
  const exportCSV = async () => {

  }

  const handleDelete = (person) => {
    setNamesList(namesList.filter(p => p !== person));
  };


  return (
    <>
      <h1>Générateur de noms</h1>
      <div className='Menu'>
        <button onClick={fetchAddNewLine}>Nouvelle ligne</button>
        <button onClick={exportCSV}>Exporter au format csv</button>
        <button onClick={() => setDisplayType('card')}>Card display</button>
        <button onClick={() => setDisplayType('text')}>Text display</button>
      </div>
      <div className='nameCards'>
        {namesList.map((person, index) => {
          if (displayType === 'card') {
            return <Card key={index} person={person} onDelete={() => handleDelete(person)} />
          }
          if (displayType === 'text') {

            return <div key={index}>{person.name.first}{person.name.last}</div>
          }
        })}
      </div>
    </>
  );
}

{/* <table>
        <thead>
          <th>Prenom</th>
          <th>Nom</th>
        </thead>
        <tbody>
          {namesList.map((person, index) => (
            // <tr key={index}>
            //   <td>{person.name.first}</td>
            //   <td>{person.name.last}</td>
            // </tr>
          ))}
        </tbody>
      </table> */}

export default Names;