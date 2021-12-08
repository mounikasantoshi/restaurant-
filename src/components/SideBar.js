import React from "react";
import { Stack } from "react-bootstrap";
import categories from "../data/categories.json";

export default function SideBar({ select }) {
  return (
    <aside>
      {categories.map((item) => (
        <div
          class="p-3 text-white border border-light "
          onClick={() => select(item.id)}
        >
          {item.itemName}
        </div>
      ))}
    </aside>
  );
}
