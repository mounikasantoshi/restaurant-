import React from "react";
import items from "../data/items.json";
import Items from "./Items";

export default function Cards({
  list,
  onClick,
  selectedCategory,
  onIncrement,
  cart,
}) {
  const menuItems = Object.values(items);
  const orderItems = Object.keys(cart);
  return (
    <>
      {selectedCategory === "" && (
        <div class="d-flex align-content-stretch flex-wrap">
          {menuItems.map((item) => (
            // <Items
            //   category={item.category !== "Biryani" || "Starter"}
            //   id={item.id}
            //   item={item.itemname}
            //   onClick={onClick}
            // />{}
            <div
              style={{
                backgroundColor: item.category === "Veg" ? "green" : "red",
              }}
              class="m-1 card  w-20 py-3 px-2 rounded  "
              onClick={() => onClick(item.id)}
            >
              {item.category !== "Biryani" || "Starter" ? item.itemname : ""}
            </div>
          ))}
        </div>
      )}
      <div class="d-flex align-content-stretch flex-wrap">
        {list.map((item, i) => (
          <Items
            category={item.category}
            id={item.id}
            item={item.itemname}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  );
}
