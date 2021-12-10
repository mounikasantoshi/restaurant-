import React from "react";
import { useSelector } from "react-redux";

export default function TableOrder() {
  const tableOrders = useSelector(({ sidebar: { tableId, tableOrder } }) => {
    const order = Object.keys(tableOrder).filter((ord) => ord === tableId);
    return Object.keys(order);
  });

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
}
