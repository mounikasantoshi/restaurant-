import {
  GET_MENU_ITEMS,
  GET_BIRYANIS,
  GET_STARTERS,
} from "../Actions/ActionType";

const initialState = {
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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_BIRYANIS:
      return {
        ...state,
        item: action.payload,
      };
    case GET_STARTERS:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
