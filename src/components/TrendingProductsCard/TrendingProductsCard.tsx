import React, { ReactElement } from "react";
import Image from "next/image";
import _classes from "./TrendingProductsCard.module.scss";

interface Props {
  image?: string;
}

function TrendingProductsCard({ image }: Props): ReactElement {
  return (
    <div
      className={`${_classes["featured-product-card"]} p-3 shadow-lg relative`}
    >
      <div className={`${_classes["featured-product-card__head"]} bg-gray-50`}>
        <div className={`${_classes["featured-product-card__image"]}`}>
          <Image src={image as string} alt="" layout="fill" />
        </div>
      </div>
      <div
        className={`${_classes["featured-product-card__body"]} bg-white px-4 pt-2 pb-4`}
      >
        <p className="text-secondary font-bold text-lg text-center mb-1">
          Cantilever Chair
        </p>
        <div className="flex items-center justify-center">
          <p className="text-secondary text-center text-base mr-3">$24.00</p>
          <p className="text-center text-secondary text-sm line-through text-opacity-50">$42.00</p>
        </div>
      </div>
    </div>
  );
}

export default TrendingProductsCard;
