import React from "react";

export default function Cards({
  list,
  select,
  selectedSpecial,
  level,
  orderList,
}) {
  return (
    <div class="d-flex align-content-stretch flex-wrap">
      {list.map((special, i) => (
        <div
          style={{
            backgroundColor: special.category === "Veg" ? "green" : "red",
          }}
          class="m-1 card  w-20 py-3 px-2 rounded  "
          onClick={() =>
            orderList(special.itemname, special.cost, special.category)
          }
        >
          {special.itemname}
        </div>
      ))}
    </div>
  );
}
