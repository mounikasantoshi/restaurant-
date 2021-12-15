import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import Counter from "./Counter";
import items from "../data/items.json";
import { useSelector, useDispatch } from "react-redux";
import { onBillpaid } from "../Redux/Actions/NavActions";
import { Link, useParams } from "react-router-dom";

const Billing = React.forwardRef((props, ref) => {
  let { tableId } = useParams();
  const dispatch = useDispatch();

  const tableOrders = useSelector(
    ({ sidebar: { tableId, tablesAndCartItems } }) => {
      const cart = tablesAndCartItems[tableId].cartItems;
      console.log(cart);
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
    <div>
      <Container>
        <div>
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
                  <tr key={id} style={{ height: "10px" }} id="tableprt">
                    <td>{i + 1}</td>
                    <td>{itemName}</td>

                    <td>
                      <Counter id={id} counter={tableOrders[id]} />
                    </td>
                    <td>{cost}</td>
                    <td>{tableOrders[id] * cost}</td>
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
          <div class="d-flex justify-content-between"></div>
          <Link to="/">
            <span className="d-flex flex-row-reverse">
              <Button
                onClick={() => dispatch(onBillpaid(tableId))}
                className="noprint "
              >
                Bill Paid
              </Button>
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
});
export default Billing;
