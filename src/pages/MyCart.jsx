import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaEquals } from "react-icons/fa6";
import CartItem from "../components/CartItem/CartItem";
import PriceCard from "../components/PriceCard/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const SHIPPING = 3000;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="flex flex-col p-8">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProducts && <p>장바구니에 상품이 없습니다!</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-grat-300 mb-8 py-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 p-2 md:px-8">
            <PriceCard text="상품 총액" price={totalPrice} />
            <FaPlus className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
