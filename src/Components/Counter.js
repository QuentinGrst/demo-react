import React, { useState } from 'react';
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Compteur</h1>
      <div>
        <div>Compte : <span className={count > 5 ? 'Count-too-high' : ""}>{count}</span>
        </div>
        <div className="Button-group">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        {count > 5 ? (
          <div className="warning-message">Le compte est trop élevé.</div>
        ) : null}
      </div>
    </>
  );
};


export default Counter;