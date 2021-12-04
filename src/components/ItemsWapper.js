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
  };
  select = (level, value) => {
    this.setState({ [level]: value });
    if (level == "secondLevel") {
      this.setState({ thirdLevel: "" });
    }

    if (level == "firstLevel") {
      this.setState({ secondLevel: "", thirdLevel: "" });
    }
  };

  getChildren = (level) =>
    Object.values(this.state.items).filter((p) => p.item == level);
  render() {
    console.log(this.state.firstLevel);
    const { items, firstLevel, secondLevel, thirdLevel, orderedList } =
      this.state;
    const firstlist = Object.values(items).filter((p) => p.item === 0);
    const secondList = this.getChildren(firstLevel);
    console.log(secondList);

    const onIncrement = (e) => {
      // setCounters(
      //   counters.map((count, i) => (i == e.target.name ? count + 1 : count))
      // );
    };

    const onDecrement = (e) => {
      this.setState({
        orderedList: [
          ...orderedList,
          orderedList.map((order, i) =>
            i == e.target.name ? order.counter - 1 : order.counter
          ),
        ],
      });
      // setCounters(
      //   counters.map((count, i) => (i == e.target.name ? count - 1 : count))
      // );
    };

    const orderList = (name, cost, cato) => {
      orderedList.includes({ item: name, Price: cost, category: cato }) &&
        alert("Already added to cart");
      this.setState({
        orderedList: [
          ...orderedList,
          {
            item: name,
            Price: cost,
            category: cato,
            counter: 0,
          },
        ],
      });
    };

    return (
      <div>
        <NavBar />
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={6}>
            <Cards />
            {/* <div class="d-flex align-content-stretch flex-wrap">
              <div class="m-1 card  w-20 py-3 px-2 rounded bg-success">
                chiken biryanui mouni doubt testg long nxt word will get cut
              </div>
              <div class="m-1 card  w-20 py-3 px-2 rounded bg-success">
                test
              </div>
              <div class="m-1 card  w-20 py-3 px-2 rounded bg-danger">test</div>
              <div class="m-1 card  w-20 py-3 px-2 rounded bg-danger">test</div>
              <div class="m-1 card  w-20 py-3 px-2 rounded bg-danger">test</div>
            </div> */}
          </Col>
          <Col md={4}>
            <Billing />
            {/* <Container>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            </Container> */}
          </Col>
        </Row>
      </div>
    );
  }
  //   return (
  //     <div>
  //       <Container>
  //         <Row>
  //           <Col>
  //             <SubItems
  //               list={firstlist}
  //               select={this.select}
  //               selectedSpecial={firstLevel}
  //               level="firstLevel"
  //             />
  //           </Col>
  //           <Col>
  //             {firstLevel !== "" && (
  //               <SubItems
  //                 list={secondList}
  //                 select={this.select}
  //                 selectedSpecial={secondLevel}
  //                 level="secondLevel"
  //               />
  //             )}
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //   );
  // }
}
