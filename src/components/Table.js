import React from "react";
// import tables from "../data/tables.json";
import { useDispatch, useSelector } from "react-redux";
import { onTableBook } from "../Redux/Actions/NavActions";

export default function Table() {
  const resTables = useSelector(({ sidebar: { table } }) => {
    return table;
  });
  const dispatch = useDispatch();

  return (
    <div class="d-flex flex-wrap justify-content-around">
      {resTables.map((table) => (
        <button
          style={{
            backgroundColor:
              table.bookingStatus === "Not Booked" ? "green" : "red",
          }}
          type="button"
          class="btn mt-3 w-20"
          onClick={() => dispatch(onTableBook(table.tableNo))}
        >
          Table{table.tableNo} {table.bookingStatus}
        </button>
      ))}
    </div>
  );
}
