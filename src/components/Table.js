import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import items from "../data/items.json";

export default function Table(props) {
  const tableOrder = useSelector(
    ({ sidebar: { tablesAndCartItems } }) => tablesAndCartItems
  );

  const getTableStatusClass = (id) => (tableOrder[id] ? "danger" : "success");

  return (
    <div class="d-flex flex-wrap justify-content-around">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => {
        return (
          <Link key={id} to={`/table/${id}`}>
            <PopUp show={tableOrder[id]}>
              <button
                type="button"
                class={`btn btn-${getTableStatusClass(id)} m-3 p-5 tableOrder`}
              >
                Table {id}
              </button>
            </PopUp>
          </Link>
        );
      })}
    </div>
  );
}
