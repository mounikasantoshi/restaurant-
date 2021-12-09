import React from "react";
import categories from "../data/categories.json";
import { useDispatch } from "react-redux";
import { onSelectCategory } from "../Redux/Actions/NavActions";

function SideBar(props) {
  const dispatch = useDispatch();

  return (
    <aside>
      {categories.map((item) => (
        <div
          class="p-3 text-white border border-light "
          onClick={() => dispatch(onSelectCategory(item.id))}
        >
          {item.itemName}
        </div>
      ))}
    </aside>
  );
}

export default SideBar;
