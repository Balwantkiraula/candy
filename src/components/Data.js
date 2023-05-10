import React, { useState } from 'react';
import Header from './Header';

function Data() {
  const [candy, setCandy] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Add new candy to the candy array
    const newCandy = { name, description, price };
    setCandy([...candy, newCandy]);

    // Clear input fields
    setName('');
    setDescription('');
    setPrice('');
  }

  function buyCandy(selectedCandy) {
    const updatedCandyList = candy.filter((candy) => candy !== selectedCandy);
    setCandy(updatedCandyList);
  }

  return (
    <>
      <Header itemCount={candy.length} candy={candy} />
      <form onSubmit={handleSubmit}>
        <label>
          Candy Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <button type="submit">Add </button>
        {candy.map((data, i) => {
          return (
            <ul key={i}>
              <li>
                {data.name} {data.description} {data.price}{' '}
              </li>
              <div>
                <button onClick={() => buyCandy(data)}>Buy</button>
              </div>
            </ul>
          );
        })}
      </form>
    </>
  );
}

export default Data;
