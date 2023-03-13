import React from "react";

interface CartCountProps {
  count: number;
  className?: string;
}

const CartCount = ({ count, className }: CartCountProps): JSX.Element => {
  return (
    <div
      className={`text-xs bg-pink-300 rounded-full w-4 justify-center text-center ${
        className ?? ""
      }`}
    >
      {count}
    </div>
  );
};

CartCount.defaultProps = {
  className: "",
};

export default CartCount;
