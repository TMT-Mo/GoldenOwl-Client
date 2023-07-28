import React, { useContext } from "react";
import blob from "@/assets/blob.svg";
import nike from "@/assets/nike.png";
import minus from "@/assets/minus.png";
import plus from "@/assets/plus.png";
import trash from "@/assets/trash.png";
import { CartContext } from "@/store/cart-context";
const Cart = () => {
  const {items, addItem, totalAmount, deleteItem, removeItem} = useContext(CartContext)

  console.log(totalAmount)
  return (
    <div className="card card-bg" style={{ borderRadius: 28 }}>
      <img src={blob} className="absolute -top-40 -left-40"></img>
      <img src={nike} alt="" className="w-10" />
      <div className="flex justify-between z-10">
        <p className="font-bold text-xl">Your Cart</p>
        <p className="font-bold text-xl">${totalAmount.toFixed(2)}</p>
      </div>
      <div
        className="flex flex-col space-y-4 overflow-scroll scrollbar-hide z-10"
        style={{ maxHeight: 400, minHeight: 400}}
      >
        {items.map((item) => {
          const { color, id, image, name, price, amount } = item;
          return (
            <div className="flex items-center space-x-2" key={id}>
              <div className="relative" >
                <div className="absolute top-0 left-0 rounded-full w-14 h-14" style={{ background: color }}></div>
                <img
                  src={image}
                  alt=""
                  className="-rotate-45 w-full"
                  style={{ maxWidth: "90px"}}
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <h5 className="text-sm font-bold">{name}</h5>
                <p className="font-bold text-xl">${price}</p>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-slate-200 cursor-pointer p-2 rounded-full" onClick={() => removeItem(id)}>
                      <img src={minus} alt="" className="w-2" />
                    </div>
                    <h5>{amount}</h5>
                    <div className="bg-slate-200 cursor-pointer p-2 rounded-full" onClick={() => addItem(item)}>
                      <img src={plus} alt="" className="w-2" />
                    </div>
                  </div>
                  <div
                    className="p-2 rounded-full cursor-pointer"
                    style={{ background: "#F6C90E" }}
                    onClick={() => deleteItem(id)}
                  >
                    <img src={trash} alt="" className="w-4" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {!items.length && <h5>Your cart it empty</h5> }
      </div>
    </div>
  );
};

export default Cart;
