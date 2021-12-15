import { Popover, OverlayTrigger } from "react-bootstrap";
import items from "../data/items.json";
import Table from "./Table";

const PopUp = (props) => {
  if (!!!props.show) return props.children;
  // if (props.show.cartItems)
  console.log(props.show.cartItems, "text98");
  console.log(Object.keys(props.show.cartItems));
  const cartItems = Object.keys(props.show.cartItems);
  function getTotalBIll() {
    return cartItems.reduce(
      (a, id) => a + props.show.cartItems[id] * items[id].cost,
      0
    );
  }
  const itemQty = props.show.cartItems;
  const renderTooltip = (props) => (
    <Popover props={{ props }}>
      <Popover.Header as="h3">Order Summary</Popover.Header>

      <Popover.Body>
        <table class="table">
          <thead>
            {cartItems.map((id) => (
              <tr>
                <th scope="col">
                  {items[id].itemName} (Qty-{itemQty[id]})
                </th>
              </tr>
            ))}
            <th>Bill Amount-{getTotalBIll()}</th>
          </thead>
        </table>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 100 }}
      overlay={renderTooltip()}
    >
      {props.children}
    </OverlayTrigger>
  );
};
export default PopUp;
