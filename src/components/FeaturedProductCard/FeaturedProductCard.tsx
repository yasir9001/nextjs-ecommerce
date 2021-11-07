import React, { ReactElement } from "react";
import Image from "next/image";
import { Button } from "antd";
import _classes from "./FeaturedProductCard.module.scss";

interface Props {}

function FeaturedProductCard({}: Props): ReactElement {
  return (
    <div
      className={`${_classes["featured-product-card"]} shadow-lg bg-gray-50 relative`}
    >
      <div className={_classes["featured-product-card__action-itmes"]}></div>
      <div className={_classes["featured-product-card__head"]}>
        <div className={`${_classes["featured-product-card__image"]}`}>
          <Image src="/assets/chair-1.png" alt="" layout="fill" />
        </div>
        <div className={`${_classes["featured-product-card__view-button"]}`}>
          <Button size="small" type="primary">
            View Details
          </Button>
        </div>
      </div>
      <div
        className={`${_classes["featured-product-card__body"]} bg-white px-4 py-2`}
      >
        <p className="text-primary font-bold text-lg text-center mb-1">
          Cantilever Chair
        </p>
        <p className="text-secondary text-center mb-1">Code - Y52320m</p>
        <p className="text-secondary text-center">$42.00</p>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
