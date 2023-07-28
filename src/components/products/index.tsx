import { data } from "@/util/data";
import React, { Fragment, useContext } from "react";
import blob from "@/assets/blob.svg";
import nike from "@/assets/nike.png";
import checked from "@/assets/check.png";
import { CartContext } from "@/store/cart-context";

const Products = () => {
  const { addItem, items } = useContext(CartContext);

  return (
    <div className="card card-bg" style={{ borderRadius: 28, minHeight: 400 }}>
      <img src={blob} className="absolute -top-40 -left-40"></img>
      <img src={nike} alt="" className="w-10" />
      <p className="font-bold text-xl z-10">Our Products</p>
      <div
        className="flex flex-col space-y-4 overflow-scroll scrollbar-hide z-10"
        style={{ maxHeight: 400 }}
      >
        {data.shoes.map((item) => {
          const { color, description, id, image, name, price } = item;
          const existingItem = items?.find((existed) => existed.id === item.id);
          return (
            <Fragment key={id}>
              <div style={{ background: color, borderRadius: 28 }}>
                <img src={image} alt="" className="-rotate-45" />
              </div>
              <h5 className="font-bold">{name}</h5>
              <p>{description}</p>
              <div className="flex flex-row justify-between items-center">
                <h5 className="font-bold">${price}</h5>
                <button
                  className={`px-6 py-2 font-bold uppercase text-sm`}
                  style={{ background: "#F6C90E", borderRadius: 28 }}
                  onClick={() => addItem(item)}
                  disabled={existingItem ? true : false}
                >
                  {existingItem ? (
                    <img src={checked} className="w-5" />
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
