import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Counter from "./Counter";
import items from "../data/items.json";

export default function Billing({ cart, onDecrement, onIncrement }) {
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

  function getTotalBIll() {
    return Object.keys(cart).reduce(
      (a, id) => a + cart[id] * items[id].cost,
      0
    );
  }

  const orderItems = Object.keys(cart);
  return (
    <div>
      <Container id="print">
        <Table
          responsive
          style={{
            display: "block",
            height: "450px",
            // overflowy: "scroll",
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
            {orderItems.map((id, i) => {
              const { itemname, cost } = items[id];

              // qtyTotal.push(counter[i] * item.Price);
              return (
                <tr style={{ height: "10px" }} id="tableprt">
                  <td>{i + 1}</td>
                  <td>{itemname}</td>

                  <td>
                    <Counter
                      id={id}
                      onDecrement={onDecrement}
                      onIncrement={onIncrement}
                      counter={cart[id]}
                    />
                  </td>
                  <td>{cost}</td>
                  <td>{cart[id] * cost}</td>
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
