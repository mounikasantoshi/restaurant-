import React, { Component } from "react";
import { Row, Col, Nav, Stack, Table, Container } from "react-bootstrap";
import Billing from "./Billing";
import Cards from "./Cards";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import items from "../data/items.json";

export default class ItemsWapper extends Component {
  state = {
    selectedCategory: "",
    orderedList: [],
    cart: {},
    counter: [],
  };
  select = (selectedCategory) => {
    this.setState({ selectedCategory });
  };

  onIncrement = (e) => {
    console.log(e.target.name);
    const { cart } = this.state;
    const id = e.target.name;
    this.setState({
      cart: { ...cart, [id]: cart[id] + 1 },
    });
    // cart: orderItems.map((id) =>
    //   id == e.target.name ? (cart[id] = cart[id] + 1) : cart[id]
    // ),

    // counter: this.state.counter.map((count, i) =>
    //   i == e.target.name ? count + 1 : count
    // ),
  };
  onDecrement = (e) => {
    const { cart } = this.state;
    const id = e.target.name;
    let { [id]: remove, ...newCart } = cart;
    if (cart[id] > 1) {
      newCart = { ...newCart, [id]: cart[id] - 1 };
    }
    this.setState({
      cart: newCart,
    });
  };

  getChildren = (level) => Object.values(items).filter((p) => p.item === level);

  onItemSelect = (id) => {
    // const { orderedList, counter } = this.state;

    this.setState({
      cart: { ...this.state.cart, [id]: 1 },
    });

    // !orderedList.some((item) => item.item == name) &&
    //   // alert("Already added to cart");
    //   this.setState({
    //     orderedList: [
    //       ...orderedList,
    //       {
    //         item: name,
    //         Price: cost,
    //         category: cato,
    //         counter: 1,
    //       },
    //     ],
    //     counter: [...counter, 1],
    //   });
  };
  render() {
    const { selectedCategory, orderedList, counter } = this.state;
    const categories = Object.values(items).filter((p) => p.item === 0);
    const itemsList = this.getChildren(selectedCategory);
    console.log(this.state.cart);
    return (
      <div
        style={{
          height: "100%",
          color: "f5f5f5",
          // backgroundColor: "#696969",
        }}
      >
        <NavBar />
        <Row class="w-100">
          <Col md={2}>
            <SideBar
              categories={categories}
              select={this.select}
              selectedSpecial={selectedCategory}
              level="selectedCategory"
            />
          </Col>
          <Col md={6} class="bg-success h-100">
            <Cards
              selectedCategory={this.state.selectedCategory}
              list={itemsList}
              select={this.select}
              onClick={this.onItemSelect}
            />
          </Col>
          <Col md={4} style={{ paddingright: "none" }}>
            <Billing
              cart={this.state.cart}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
              counter={counter}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
