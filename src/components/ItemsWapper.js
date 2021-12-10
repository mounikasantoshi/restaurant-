import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Billing from "./Billing";
import Cards from "./Cards";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { onTableBook } from "../Redux/Actions/NavActions";

export default function ItemsWapper() {
  let { tableId } = useParams();
  console.log(tableId);
  const dispatch = useDispatch();

  let selectedTableId = useSelector(({ sidebar: { tableId } }) => {
    return tableId;
  });

  useEffect(() => {
    dispatch(onTableBook(tableId));
  }, []);
  return (
    selectedTableId && (
      <div>
        <Row className="w-100 ">
          <Col md={2} className="p-0 ">
            <SideBar />
          </Col>
          <Col md={6} className="p-0">
            <Cards />
          </Col>
          <Col md={4} className="p-0">
            <Billing />
          </Col>
        </Row>
      </div>
    )
  );
}
