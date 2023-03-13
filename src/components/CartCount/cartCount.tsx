import React from "react";

interface CartCountProps {
  count: number;
  className?: string;
}

const CartCount = ({ count, className }: CartCountProps): JSX.Element => {
  return (
    <div
      className={`text-xs bg-gray-700 rounded-full w-4 justify-center text-center text-black-700  ${
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
