import React from "react";
import Button from "../Button/button";

// TODO remove optionals

interface ItemCardProps {
  productName?: string;
  productDescription?: string;
  productImage?: string;
  unitPrice: number;
  className?: string;
}

const ItemCard = ({
  productName,
  productDescription,
  productImage,
  unitPrice,
  className,
}: ItemCardProps): JSX.Element => (
  <div
    className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ${
      className ?? ""
    }`}
  >
    <img
      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={productImage}
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {productName}
      </h5>
      <p className="mb-3 font-normal text-gray-700">{productDescription}</p>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900">{`$${unitPrice}`}</span>
        <Button>Add to cart</Button>
      </div>
    </div>
  </div>
);

ItemCard.defaultProps = {
  productName: "Orange Shirt",
  productDescription:
    "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore   Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore",
  unitPrice: 100,
  className: "",
  productImage: "https://flowbite.com/docs/images/products/apple-watch.png",
};

export default ItemCard;
