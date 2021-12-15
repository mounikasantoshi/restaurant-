import React from "react";
import { useSelector } from "react-redux";
import items from "../data/items.json";

const BillToGetPrinted = React.forwardRef((props, ref) => {
  const tableOrders = useSelector(
    ({ sidebar: { tableId, tablesAndCartItems } }) => {
      const cart = tablesAndCartItems[tableId].cartItems;
      return cart;
    }
  );
  const orderedList = Object.keys(tableOrders);

  function getTotalBIll() {
    return orderedList.reduce(
      (a, id) => a + tableOrders[id] * items[id].cost,
      0
    );
  }

  return (
    <table className="bill" ref={ref}>
      <thead>
        <tr>
          <th>s.no</th>
          <th> Item Name </th>
          <th> Quantity </th>
          <th> price </th>
        </tr>
      </thead>
      <tbody>
        {orderedList.map((id, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{items[id].itemName}</td>
            <td>{tableOrders[id]}</td>
            <td>{items[id].cost}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <th>Total Price--</th>
          <th>{getTotalBIll()}</th>
        </tr>
      </tbody>
    </table>
  );
});
export default BillToGetPrinted;
