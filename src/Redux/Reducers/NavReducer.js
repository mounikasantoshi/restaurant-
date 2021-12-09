import {
  SELECTED_ITEM,
  SELECT_CATEGORY,
  ITEM_INCREMENt,
  ITEM_DECREASE,
  TABLE_BOOKING,
} from "../Actions/ActionType";

const initialState = {
  selectedCategory: "",
  cart: {},
  table: [
    { tableNo: "1", bookingStatus: "Not Booked" },
    { tableNo: "2", bookingStatus: "Not Booked" },
    { tableNo: "3", bookingStatus: "Not Booked" },
    { tableNo: "4", bookingStatus: "Not Booked" },
    { tableNo: "5", bookingStatus: "Not Booked" },
    { tableNo: "6", bookingStatus: "Not Booked" },
    { tableNo: "7", bookingStatus: "Not Booked" },
    { tableNo: "8", bookingStatus: "Not Booked" },
    { tableNo: "9", bookingStatus: "Not Booked" },
    { tableNo: "10", bookingStatus: "Not Booked" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case SELECTED_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: state.cart[action.payload] + 1 || 1,
        },
      };
    case ITEM_DECREASE:
      let { [action.payload]: currentItemCount, ...remainingItems } =
        state.cart;
      let cart =
        currentItemCount > 1
          ? { ...remainingItems, [action.payload]: currentItemCount - 1 }
          : remainingItems;
      return {
        ...state,
        cart,
      };
    case ITEM_INCREMENt:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: state.cart[action.payload] + 1,
        },
      };
    case TABLE_BOOKING:
      const resTable = [...state.table];
      resTable[action.payload - 1].bookingStatus = "Booked";
      return {
        ...state,
        table: resTable,
      };
    default:
      return state;
  }
}
