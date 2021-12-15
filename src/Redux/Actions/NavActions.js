import {
  SELECTED_ITEM,
  SELECT_CATEGORY,
  ITEM_DECREASE,
  ITEM_INCREMENt,
  TABLE_OCCUPIED,
  BILL_SETTLED,
} from "./ActionType";

export const onSelectCategory = (id) => ({
  type: SELECT_CATEGORY,
  payload: id,
});
export const onSelectItem = (selectedId) => ({
  type: SELECTED_ITEM,
  payload: selectedId,
});
export const onDecrementItemQuantity = (id) => ({
  type: ITEM_DECREASE,
  payload: id,
});
export const onIncrementItemQuantity = (id) => ({
  type: ITEM_INCREMENt,
  payload: id,
});
export const onTableBook = (id) => ({
  type: TABLE_OCCUPIED,
  payload: id,
});

export const onBillpaid = (id) => ({
  type: BILL_SETTLED,
  payload: id,
});
