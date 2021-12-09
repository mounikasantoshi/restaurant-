import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import Counter from "./Counter";
import items from "../data/items.json";
import { useSelector } from "react-redux";

export default function Billing() {
  const orderItems = useSelector(({ sidebar: { cart } }) => {
    return cart;
  });
  const printPage = () => {
    const printButton = document.getElementById("remove");
    const incButton = document.getElementById("inc");
    const printRemoveButton = document.getElementById("printBtn");
    const tableHeight = document.getElementById("tableprt");
    printButton.style.visibility = "hidden";
    printRemoveButton.style.visibility = "hidden";
    incButton.style.visibility = "hidden";
    tableHeight.style.height = "none";

    var print_div = document.getElementById("print");

    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    // print_area.document.close();
    // print_area.focus();
    print_area.print();
    // print_area.close();
    // This is the code print a particular div element
    tableHeight.style.height = "10px";
    incButton.style.visibility = "visible";
    printButton.style.visibility = "visible";
    printRemoveButton.style.visibility = "visible";
  };

  const orderedList = Object.keys(orderItems);
  function getTotalBIll() {
    return orderedList.reduce(
      (a, id) => a + orderItems[id] * items[id].cost,
      0
    );
  }

  return (
    <div>
      <Container id="print">
        <Table
          responsive
          style={{
            display: "block",
            height: "450px",
          }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th> Item Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>TotalPrice</th>
            </tr>
          </thead>
          <tbody>
            {orderedList.map((id, i) => {
              const { itemName, cost } = items[id];

              return (
                <tr style={{ height: "10px" }} id="tableprt">
                  <td>{i + 1}</td>
                  <td>{itemName}</td>

                  <td>
                    <Counter id={id} counter={orderItems[id]} />
                  </td>
                  <td>{cost}</td>
                  <td>{orderItems[id] * cost}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>#</td>
              <td>Total Price</td>
              <td>-</td>
              <td>-</td>
              <td>{getTotalBIll()}</td>
            </tr>
          </tbody>
        </Table>

        <Button className="printPageButton" id="printBtn" onClick={printPage}>
          Print
        </Button>
      </Container>
    </div>
  );
}
