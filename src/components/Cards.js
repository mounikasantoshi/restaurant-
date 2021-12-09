import React from "react";
import items from "../data/items.json";
import { useSelector, useDispatch } from "react-redux";
import { onSelectItem } from "../Redux/Actions/NavActions";

function Cards({ onClick = () => {}, ...props }) {
  const itemsList = useSelector(({ sidebar: { selectedCategory } }) => {
    return Object.values(items).filter(
      (item) => item.categoryId == selectedCategory
    );
  });

  const dispatch = useDispatch();

  return (
    <>
      <div class="d-flex align-content-stretch flex-wrap">
        {itemsList.map((item, i) => (
          <div
            style={{
              backgroundColor: item.category === "Veg" ? "green" : "red",
            }}
            className="m-1 card  w-20 py-3 px-2 rounded  "
            onClick={() => dispatch(onSelectItem(item.id))}
          >
            {item.itemName}
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
