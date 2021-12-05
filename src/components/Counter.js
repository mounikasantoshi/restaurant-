import React from "react";

export default function CountRow({ counter, onDecrement, onIncrement, id }) {
  // console.log(counter);
  // console.log(id);
  return (
    <div>
      <button name={id} id="remove" onClick={onDecrement}>
        -
      </button>
      <span>{counter}</span>
      <button name={id} id="inc" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}
