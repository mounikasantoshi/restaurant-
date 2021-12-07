import React from "react";

export default function Items({ category, id, item, onClick }) {
  return (
    <>
      <div
        style={{
          backgroundColor: category === "Veg" ? "green" : "red",
        }}
        class="m-1 card  w-20 py-3 px-2 rounded  "
        onClick={() => onClick(id)}
      >
        {item}
      </div>
    </>
  );
}
