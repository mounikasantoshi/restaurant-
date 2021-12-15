import {
  SELECTED_ITEM,
  SELECT_CATEGORY,
  ITEM_DECREASE,
  TABLE_OCCUPIED,
  BILL_SETTLED,
} from "../Actions/ActionType";

const initialState = {
  selectedCategory: "",
  tableId: "",
  tablesAndCartItems: {},
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
      let selectedTableCartItems = state.tablesAndCartItems[tableId].cartItems;
      let categoryId = action.payload;
      let itemCount = selectedTableCartItems[categoryId];
      return {
        ...state,
        tablesAndCartItems: {
          ...state.tablesAndCartItems,
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
        state.tablesAndCartItems[tblId].cartItems;
      let cartItems =
        currentItemCount - 1
          ? {
              ...tableCartItems,
              [itemId]: currentItemCount - 1,
            }
          : tableCartItems;
      return {
        ...state,
        tablesAndCartItems: {
          ...state.tablesAndCartItems,
          [tblId]: {
            cartItems,
          },
        },
      };
    case TABLE_OCCUPIED:
      console.log(action.payload);
      let tablesAndCartItems = state.tablesAndCartItems[action.payload]
        ? state.tablesAndCartItems
        : {
            ...state.tablesAndCartItems,
            [action.payload]: {
              cartItems: {},
            },
          };
      return {
        ...state,
        tableId: action.payload,
        tablesAndCartItems,
      };
    case BILL_SETTLED:
      console.log(action.payload);
      let { [action.payload]: paidBill, ...pendingbills } =
        state.tablesAndCartItems;
      console.log(pendingbills);
      return {
        ...state,
        selectedCategory: "",
        tableId: "",
        tablesAndCartItems: { ...pendingbills },
      };

    default:
      return state;
  }
}
