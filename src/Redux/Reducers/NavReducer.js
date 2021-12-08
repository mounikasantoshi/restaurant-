import {
  GET_MENU_ITEMS,
  GET_BIRYANIS,
  GET_STARTERS,
} from "../Actions/ActionType";
import items from "../data/items.json";
import categories from "../data/categories.json";

const initialState = {
  selectedItem: "",
  selectedSubItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return {
        ...state,
        selectedItem: selectedItem,
      };
    case GET_BIRYANIS:
      return {
        ...state,
        selectedSubItems: items.filter((item) => item.id === selectedItem),
      };
    case GET_STARTERS:
      return {
        ...state,
        selectedSubItems: items.filter((item) => item.id === selectedItem),
      };
    default:
      return state;
  }
}
