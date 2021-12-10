import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Table() {
  const tableOrder = useSelector(({ sidebar: { tableOrder } }) => tableOrder);

  const getTableStatusClass = (id) => (tableOrder[id] ? "danger" : "success");
  return (
    <div class="d-flex flex-wrap justify-content-around">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id, i) => (
        <Link to={`/table/${id}`}>
          <div
            type="button"
            class={`btn btn-${getTableStatusClass(id)} m-3 p-5 `}
          >
            Table {id}
          </div>
        </Link>
      ))}
    </div>
  );
}
