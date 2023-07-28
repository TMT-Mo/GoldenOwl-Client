import { CartContext, IContext } from "./cart-context";

import { ReactNode, useReducer } from "react";
import { IShoes, IShoesList } from "../model/shoes";
import { getSavedItem, saveItem } from "@/util/helper";

interface State {
  items: IShoesList[];
  totalAmount: number;
}

interface Props {
  children: ReactNode;
}

interface Action {
  payload: {
    type: "ADD" | "REMOVE" | "DELETE" | "GET SAVED ITEM";
    item?: IShoes;
    items?: IShoesList[];
    totalAmount?: number;
    id?: number;
  };
}

interface ICartReducer {
  (state: State, action: Action): State;
}

const initialState: State = {
  totalAmount: 0,
  items: [],
};

const cartReducer: ICartReducer = (state, { payload }) => {
  const { type } = payload;
  switch (type) {
    case "ADD": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === payload.item!.id
      );
      const existingItem = state.items[existingItemIndex];
      const updateItemList: IShoesList[] = [...state.items!];
      if (existingItem) {
        updateItemList[existingItemIndex].amount += 1;
      } else {
        updateItemList.push({ ...payload.item!, amount: 1 });
      }
      let totalAmount = 0;
      updateItemList.forEach((item) => {
        const { amount, price } = item;
        totalAmount += amount * price;
      });

      saveItem(updateItemList, totalAmount);

      return {
        items: updateItemList,
        totalAmount,
      };
    }
    case "DELETE": {
      const updateItemList: IShoesList[] = state.items.filter(
        (item) => item.id !== payload.id
      );
      let totalAmount = 0;
      updateItemList.forEach((item) => {
        const { amount, price } = item;
        totalAmount += amount * price;
      });

      saveItem(updateItemList, totalAmount);

      return {
        items: updateItemList,
        totalAmount,
      };
    }
    case "REMOVE": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );
      const existingItem = state.items[existingItemIndex];
      let updateItemList: IShoesList[] = [...state.items!];
      if (existingItem.amount === 1) {
        updateItemList = updateItemList.filter(
          (item) => item.id !== payload.id
        );
      } else {
        updateItemList[existingItemIndex].amount -= 1;
      }
      let totalAmount = 0;
      updateItemList.forEach((item) => {
        const { amount, price } = item;
        totalAmount += amount * price;
      });

      saveItem(updateItemList, totalAmount);

      return {
        items: updateItemList,
        totalAmount,
      };
    }

    case "GET SAVED ITEM": {
      // debugger
      return {
        items: payload.items!,
        totalAmount: payload.totalAmount!,
      };
    }

    default:
      return initialState;
  }
};

const CartProvider = (props: Props) => {
  const { children } = props;
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const onAddCartHandler = (item: IShoes) => {
    dispatchCartAction({
      payload: {
        type: "ADD",
        item,
      },
    });
  };

  const onDeleteCartHandler = (id: number) => {
    dispatchCartAction({
      payload: {
        type: "DELETE",
        id,
      },
    });
  };

  const onRemoveItemHandler = (id: number) => {
    dispatchCartAction({
      payload: {
        type: "REMOVE",
        id,
      },
    });
  };

  const onGetSavedItemHandler = (items: IShoesList[], totalAmount: number) => {
    dispatchCartAction({
      payload: {
        type: "GET SAVED ITEM",
        items,
        totalAmount,
      },
    });
  };

  const cartCtx: IContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: onAddCartHandler,
    deleteItem: onDeleteCartHandler,
    removeItem: onRemoveItemHandler,
    getSavedItem: onGetSavedItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
