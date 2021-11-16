import React from "react";
import Image from "next/image";
import { HeartOutlined, CartOutlined, SearchPlusOutlined } from "../CustomIcon";

import _classes from "./LatestProductCard.module.scss";

interface Props {}

const LatestProductCard = (props: Props) => {
  return (
    <div className={_classes["latest-product-card"]}>
      <div
        className={`${_classes["latest-product-card__head"]} bg-white-1 h-px-270 flex items-end justify-center relative mb-3`}
      >
        <div
          className={`${_classes["latest-product-card__action-items"]} p-3 hidden absolute bottom-0 left-0 z-10	 `}
        >
          <button className="h-px-32 w-px-32 flex items-center justify-center rounded-full hover:bg-blue-2">
            <CartOutlined />
          </button>
          <button className="h-px-32 w-px-32 flex items-center justify-center rounded-full hover:bg-blue-2">
            <HeartOutlined />
          </button>
          <button className="h-px-32 w-px-32 flex items-center justify-center rounded-full hover:bg-blue-2">
            <SearchPlusOutlined />
          </button>
        </div>
        <div
          className={`${_classes["latest-product-card__head-image"]} h-px-240 w-full`}
        >
          <Image layout="fill" alt="" src="/assets/chair-1.png" />
        </div>
      </div>
      <div
        className={`${_classes["latest-product-card__body"]} flex justify-between`}
      >
        <div className="border-b-2 border-blue-2">
          <a className="text-secondary text-lg ">Comfort handy Craft</a>
        </div>
        <div className="flex">
          <p className="text-secondary mr-3 text-lg">$42.00</p>
          <p className="text-primary mr-4 line-through text-sm flex items-center">
            $65.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
