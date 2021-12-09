import React from "react";
import { Row, Col } from "react-bootstrap";
import Billing from "./Billing";
import Cards from "./Cards";
import SideBar from "./SideBar";

export default function ItemsWapper() {
  return (
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
  );
}
