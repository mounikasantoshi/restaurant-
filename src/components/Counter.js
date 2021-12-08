import React from "react";

export default function CountRow({ counter, onDecrement, onIncrement, id }) {
  // console.log(counter);
  // console.log(id);
  return (
    <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
      <button
        name={id}
        id="remove"
        onClick={onDecrement}
        type="button"
        class="btn btn-outline-secondary countbtn "
      >
        -
      </button>
      {/* <button name={id} id="remove" onClick={onDecrement}>
        -
      </button> */}
      <span>{counter}</span>
      <button
        name={id}
        id="inc"
        onClick={onIncrement}
        type="button"
        class="btn btn-outline-secondary countbtn "
      >
        +
      </button>

      {/* <button name={id} id="inc" onClick={onIncrement}>
        +
      </button> */}
    </div>
  );
}
