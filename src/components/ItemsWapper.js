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
    cart: {},
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

  getSubCategories = (level) =>
    Object.values(items).filter((p) => p.item === level);

  onItemSelect = (id) => {
    console.log(id);

    const count = this.state.cart[id] ? this.state.cart[id] + 1 : 1;
    count > 1 && alert("Already in cart and quantity added by 1 ");
    this.setState({
      cart: { ...this.state.cart, [id]: count },
    });
  };

  render() {
    console.log(this.state.cart);
    const { selectedCategory } = this.state;
    const categories = Object.values(items).filter((p) => p.item === 0);
    const itemsList = this.getSubCategories(selectedCategory);
    console.log(this.state.cart);
    return (
      <div>
        <NavBar />
        <Row className="w-100 ">
          <Col md={2} className="p-0 ">
            <SideBar
              categories={categories}
              select={this.select}
              selectedSpecial={selectedCategory}
              level="selectedCategory"
            />
          </Col>
          <Col md={6} className="p-0">
            <Cards
              selectedCategory={this.state.selectedCategory}
              list={itemsList}
              select={this.select}
              onClick={this.onItemSelect}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
              cart={this.state.cart}
            />
          </Col>
          <Col md={4} className="p-0">
            <Billing
              cart={this.state.cart}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
