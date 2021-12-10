import {
  SELECTED_ITEM,
  SELECT_CATEGORY,
  ITEM_DECREASE,
  TABLE_BOOKING,
  BILL_SETTLED,
} from "../Actions/ActionType";

const initialState = {
  selectedCategory: "",
  tableId: "",
  tableOrder: {},
};

export default function (state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case SELECTED_ITEM:
      let tableId = state.tableId;
      let selectedTableCartItems = state.tableOrder[tableId].cartItems;
      let categoryId = action.payload;
      let itemCount = selectedTableCartItems[categoryId];
      return {
        ...state,
        tableOrder: {
          ...state.tableOrder,
          [tableId]: {
            cartItems: {
              ...selectedTableCartItems,
              [categoryId]: itemCount + 1 || 1,
            },
          },
        },
      };

    case ITEM_DECREASE:
      let tblId = state.tableId;
      let itemId = action.payload;
      let { [itemId]: currentItemCount, ...tableCartItems } =
        state.tableOrder[tblId].cartItems;
      let cartItems =
        currentItemCount - 1
          ? {
              ...tableCartItems,
              [itemId]: currentItemCount - 1,
            }
          : tableCartItems;
      return {
        ...state,
        tableOrder: {
          ...state.tableOrder,
          [tblId]: {
            cartItems,
          },
        },
      };
    case TABLE_BOOKING:
      console.log(action.payload);
      let tableOrder = state.tableOrder[action.payload]
        ? state.tableOrder
        : {
            ...state.tableOrder,
            [action.payload]: {
              cartItems: {},
            },
          };
      return {
        ...state,
        tableId: action.payload,
        tableOrder,
      };
    case BILL_SETTLED:
      let { [action.payload]: paidBill, ...pendingbills } = state.tableOrder;
      return {
        tableOrder: { ...pendingbills },
      };

    default:
      return state;
  }
}
