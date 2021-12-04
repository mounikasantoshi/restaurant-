import React from "react";
import { Stack } from "react-bootstrap";

export default function SideBar({ firstlist, select }) {
  return (
    <div>
      <Stack>
        {firstlist.map((item) => (
          <div
            class="p-3  bg-secondary text-white border border-dark "
            onClick={() => select("firstLevel", item.id)}
          >
            {item.itemname}
          </div>
        ))}
      </Stack>
    </div>
  );
}
