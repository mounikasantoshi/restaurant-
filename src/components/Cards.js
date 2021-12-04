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
          // {special.category==="Veg"?
          //   class="m-1 card  w-20 py-3 px-2 rounded bg-success":
          class="m-1 card  w-20 py-3 px-2 rounded bg-danger"
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
