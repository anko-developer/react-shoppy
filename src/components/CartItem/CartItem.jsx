import React from "react";
import useCart from "../../hooks/useCart";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const ICO_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105";
export default function CartItem({
  product,
  product: { id, image, title, option, price, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
    console.log("마이너스");
  };
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
    console.log("플러스");
  };
  const handleDelete = () => removeItem.mutate(id);
  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex flex-1 justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>{price}</p>
        </div>
        <div className="flex text-2xl items-center">
          <CiSquareMinus className={ICO_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <CiSquarePlus className={ICO_CLASS} onClick={handlePlus} />
          <RiDeleteBinLine className={ICO_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
