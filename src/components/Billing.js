import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Counter from "./Counter";
import { FaRegDotCircle } from "react-icons/fa";

export default function Billing({
  orderedList,
  onDecrement,
  onIncrement,
  counter,
}) {
  // const ordertotal = [];
  const qtyTotal = [];
  // const totalcost = qtyTotal.reduce((b, a) => b + a, 0);
  // orderedList.forEach((item) => ordertotal.push(item.Price));

  const printPage = () => {
    const printButton = document.getElementById("remove");
    const incButton = document.getElementById("inc");
    const printRemoveButton = document.getElementById("printBtn");
    printButton.style.visibility = "hidden";
    incButton.style.visibility = "hidden";
    printRemoveButton.style.visibility = "hidden";

    var print_div = document.getElementById("print");

    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    // print_area.document.close();
    // print_area.focus();
    print_area.print();
    // print_area.close();
    // This is the code print a particular div element
  };

  return (
    <div>
      <Container id="print">
        <Table responsive>
          <thead>
            <tr>
              <th>S.no</th>
              <th> Item Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>TotalPrice</th>
            </tr>
          </thead>
          <tbody>
            {orderedList.map((item, i) => {
              qtyTotal.push(counter[i] * item.Price);

              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    {item.item}
                    <FaRegDotCircle
                      style={{
                        color: item.category === "Veg" ? "Green" : "red",
                        height: "10px",
                      }}
                    />
                  </td>

                  <td>
                    <Counter
                      id={i}
                      onDecrement={onDecrement}
                      onIncrement={onIncrement}
                      counter={counter[i]}
                    />
                  </td>
                  <td>{item.Price}</td>
                  <td>{counter[i] * item.Price}</td>
                </tr>
              );
            })}

            <tr>
              <td>#</td>
              <td>Total Price</td>
              <td>-</td>
              <td>-</td>
              <td>{qtyTotal.reduce((b, a) => b + a, 0)}</td>
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
