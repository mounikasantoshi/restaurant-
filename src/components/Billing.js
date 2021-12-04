import React from "react";
import { Container, Table } from "react-bootstrap";

export default function Billing({ orderedList }) {
  const ordertotal = [];
  orderedList.forEach((item) => ordertotal.push(item.Price));
  const totalprice = ordertotal.reduce((b, a) => b + a, 0);

  console.log(ordertotal);
  console.log(orderedList);
  return (
    <div>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>S.no</th>
              <th> Item Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderedList.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item.item}</td>
                <td>{item.category}</td>
                <td>{item.Price}</td>
              </tr>
            ))}
            <tr>
              <td>#</td>
              <td>Total Price</td>
              <td>-</td>
              <td>{totalprice}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
