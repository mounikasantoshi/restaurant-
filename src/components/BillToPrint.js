import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import BillToGetPrinted from "./BillToGetPrinted";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BillToPrint = () => {
  const tableOrders = useSelector(
    ({ sidebar: { tablesAndCartItems } }) => tablesAndCartItems
  );
  let { tableId } = useParams();

  const componentRef = useRef();

  return (
    <div>
      {tableOrders[tableId].cartItems ? (
        <ReactToPrint
          trigger={() => <Button className="mb-3">Print the Bill!</Button>}
          content={() => componentRef.current}
        />
      ) : (
        ""
      )}
      <div className="billtoprint">
        {/* {!!!tableOrders[tableId].cartItems && ( */}
        <BillToGetPrinted ref={componentRef} />
        {/* )} */}
      </div>
    </div>
  );
};
export default BillToPrint;
