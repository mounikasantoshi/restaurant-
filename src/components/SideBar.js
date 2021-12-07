import React from "react";
import { Stack } from "react-bootstrap";

export default function SideBar({ categories, select }) {
  return (
    <div>
      <Stack>
        {categories.map((item) => (
          <div
            style={{ width: "217px", borderColor: "#696969" }}
            class="p-3  bg-secondary text-white border border-light"
            onClick={() => select(item.id)}
          >
            {item.itemname}
          </div>
        ))}
      </Stack>
    </div>
  );
}
