import React from "react";
import { useDispatch } from "react-redux";
import {
  onDecrementItemQuantity,
  onSelectItem,
} from "../Redux/Actions/NavActions";

export default function CountRow({ counter, id }) {
  const dispatch = useDispatch();
  const onIncrementClick = () => dispatch(onSelectItem(id));
  const onDecrementClick = () => dispatch(onDecrementItemQuantity(id));

  return (
    <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
      <button
        name={id}
        id="remove"
        onClick={onDecrementClick}
        type="button"
        class="btn btn-outline-secondary countbtn noprint"
      >
        -
      </button>

      <span>{counter}</span>
      <button
        name={id}
        id="inc"
        onClick={onIncrementClick}
        type="button"
        class="btn btn-outline-secondary countbtn noprint"
      >
        +
      </button>
    </div>
  );
}
