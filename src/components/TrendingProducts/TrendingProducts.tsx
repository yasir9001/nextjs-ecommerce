import React from "react";
import TrendingProductsCard from "../TrendingProductsCard/TrendingProductsCard";
import Image from "next/image";
import _classes from "./TrendingProducts.module.scss";
interface Props {}

const TrendingProducts = (props: Props) => {
  return (
    <div className={_classes["trending-products"]}>
      {/* <div className={_classes["trending-products__row-1"]}>
        <TrendingProductsCard image="/assets/chair-2.png" />
        <TrendingProductsCard image="/assets/chair-3.png" />
        <TrendingProductsCard image="/assets/chair-4.png" />
        <TrendingProductsCard image="/assets/chair-5.png" />
      </div> */}
      <div className={`${_classes["trending-products__row-2"]} mt-8 flex`}>
        <div
          className={`${_classes["trending-products__row-2__card-1"]} pt-8 px-6 pb-4 flex-1	`}
        >
          <div>
            <p className="text-secondary text-xl font-semibold mb-3">
              23% off on all products
            </p>
            <a className="underline text-base font-semibold">Shop Now</a>
          </div>
          <div className="h-px-200 responsive-img-next w-9/12 ml-auto">
            <Image
              className="object-right"
              src="/assets/clock.png"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${_classes["trending-products__row-2__card-2"]} pt-8 px-4 pb-4`}
        >
          <div>
            <p className="text-secondary text-xl font-semibold mb-3">
              23% off on all products
            </p>
            <a className="underline text-base font-semibold">View Collection</a>
          </div>
          <div className="h-px-200 responsive-img-next w-9/12 ml-auto">
            <Image
              className="object-right"
              src="/assets/drawer.png"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div>
            <div className="h-px-100 w-px-70 responsive-img-next bg-gray">
              <Image src="/assets/lamp.png" alt="" layout="fill" />
            </div>
            <div className="">
              <p>Executive Seat Chair</p>
              <p>32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
