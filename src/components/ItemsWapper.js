import React, { Component } from "react";
import { Row, Col, Nav, Stack, Table, Container } from "react-bootstrap";
import Billing from "./Billing";
import Cards from "./Cards";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default class ItemsWapper extends Component {
  state = {
    items: {
      1: { id: 1, item: 0, itemname: "Biryani" },
      2: {
        id: 2,
        item: 1,
        category: "Veg",
        itemname: "veg-biryani",
        cost: 100,
      },
      3: {
        id: 3,
        item: 1,
        category: "Veg",
        itemname: "paneer-biryani",
        cost: 210,
      },
      4: {
        id: 4,
        item: 1,
        category: "Veg",
        itemname: "muchroom-biryani",
        cost: 200,
      },
      5: {
        id: 5,
        item: 1,
        category: "non-Veg",
        itemname: "chicken-biryani",
        cost: 150,
      },
      6: {
        id: 6,
        item: 1,
        category: "non-Veg",
        itemname: "egg-biryani",
        cost: 120,
      },
      7: {
        id: 7,
        item: 1,
        category: "non-Veg",
        itemname: "dum-biryani",
        cost: 220,
      },
      8: {
        id: 8,
        item: 1,
        category: "non-Veg",
        itemname: "mutton-biryani",
        cost: 200,
      },
      9: {
        id: 9,
        item: 0,
        itemname: "Starter",
      },
      10: {
        id: 10,
        item: 9,
        category: "Veg",
        itemname: "muchroom-monchuriya",
        cost: 150,
      },
      11: {
        id: 11,
        item: 9,
        category: "Veg",
        itemname: "chilli muchroom",
        cost: 180,
      },
      12: {
        id: 12,
        item: 9,
        category: "Veg",
        itemname: "paneer manchuriya",
        cost: 200,
      },
      13: { id: 13, item: 9, category: "Veg", itemname: "babycorn", cost: 160 },
      14: {
        id: 14,
        item: 9,
        category: "Veg",
        itemname: "sweetcorn",
        cost: 100,
      },
      15: {
        id: 15,
        item: 9,
        category: "non-Veg",
        itemname: "chicken-manchuriya",
        cost: 200,
      },
      16: {
        id: 16,
        item: 9,
        category: "nonVeg",
        itemname: "chilli-chicken",
        cost: 250,
      },
    },
    firstLevel: "",
    secondLevel: "",
    thirdLevel: false,
    orderedList: [],
    counter: [],
  };
  select = (level, value) => {
    this.setState({ [level]: value });
    if (level === "secondLevel") {
      this.setState({ thirdLevel: "" });
    }

    if (level === "firstLevel") {
      this.setState({ secondLevel: "", thirdLevel: "" });
    }
  };

  getChildren = (level) =>
    Object.values(this.state.items).filter((p) => p.item === level);
  render() {
    // console.log(this.state.firstLevel);
    const { items, firstLevel, secondLevel, orderedList, counter } = this.state;
    const firstlist = Object.values(items).filter((p) => p.item === 0);
    const secondList = this.getChildren(firstLevel);
    // console.log(secondList);

    const onIncrement = (e) => {
      console.log(counter);
      this.setState({
        counter:
          // ...counter,
          counter.map((count, i) => (i == e.target.name ? count + 1 : count)),
      });
      console.log(counter);
    };
    const onDecrement = (e) => {
      console.log(counter);
      this.setState({
        counter: [
          // ...counter,
          counter.map((count, i) => (i == e.target.name ? count - 1 : count)),
        ],
      });
      console.log(counter);
    };

    const orderList = (name, cost, cato) => {
      !orderedList.includes({ item: name, Price: cost, category: cato }) &&
        // alert("Already added to cart");
        this.setState({
          orderedList: [
            ...orderedList,
            {
              item: name,
              Price: cost,
              category: cato,
              counter: 1,
            },
          ],
          counter: [...counter, 1],
        });
    };

    return (
      <div>
        <NavBar />
        <Row>
          <Col md={2}>
            <SideBar
              firstlist={firstlist}
              select={this.select}
              selectedSpecial={firstLevel}
              level="firstLevel"
            />
          </Col>
          <Col md={6} class="bg-success h-100">
            <Cards
              list={secondList}
              select={this.select}
              selectedSpecial={secondLevel}
              level="secondLevel"
              orderList={orderList}
            />
          </Col>
          <Col md={4}>
            <Billing
              orderedList={orderedList}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              counter={counter}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
