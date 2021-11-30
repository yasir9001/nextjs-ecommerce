import React from "react";
import TrendingProductsCard from "../TrendingProductsCard/TrendingProductsCard";
import Image from "next/image";
import _classes from "./TrendingProducts.module.scss";
interface Props {}

const TrendingProducts = (props: Props) => {
  return (
    <div className={_classes["trending-products"]}>
      <div className={_classes["trending-products__row-1"]}>
        <TrendingProductsCard image="/assets/chair-2.png" />
        <TrendingProductsCard image="/assets/chair-3.png" />
        <TrendingProductsCard image="/assets/chair-4.png" />
        <TrendingProductsCard image="/assets/chair-5.png" />
      </div>
      <div
        className={`${_classes["trending-products__row-2"]} mt-10 flex gap-8`}
      >
        <div
          className={`${_classes["trending-products__row-2__card-1"]} pt-8 px-6 pb-4 flex-1`}
        >
          <div>
            <p className="text-secondary text-xl font-semibold mb-3">
              23% off on all products
            </p>
            <a className="underline text-primary font-semibold">Shop Now</a>
          </div>
          <div className="h-px-160 responsive-img-next w-9/12 ml-auto">
            <Image
              className="object-right"
              src="/assets/clock.png"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${_classes["trending-products__row-2__card-2"]} pt-8 px-4 pb-4 flex-1`}
        >
          <div>
            <p className="text-secondary text-xl font-semibold mb-3">
              23% off on all products
            </p>
            <a className="underline text-primary font-semibold">
              View Collection
            </a>
          </div>
          <div className="h-px-160 responsive-img-next w-9/12 ml-auto">
            <Image
              className="object-right"
              src="/assets/drawer.png"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-px-300 w-full">
          <div className="flex flex-1">
            <div className="h-full p-2 w-px-100 bg-gray-1 ">
              <div className=" h-full responsive-img-next">
                <Image src="/assets/chair-1.png" alt="" layout="fill" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center p-4 ">
              <p className="text-base text-secondary">Executive Seat Chair</p>
              <p className="text-secondary line-through">$32.00</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="h-full p-2 w-px-100 bg-gray-1 ">
              <div className=" h-full responsive-img-next">
                <Image src="/assets/chair-2.png" alt="" layout="fill" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center p-4 ">
              <p className="text-base text-secondary">Executive Seat Chair</p>
              <p className="text-secondary line-through">$32.00</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="h-full p-2 w-px-100 bg-gray-1 ">
              <div className=" h-full responsive-img-next">
                <Image src="/assets/lamp.png" alt="" layout="fill" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center p-4 ">
              <p className="text-base text-secondary">Executive Seat Chair</p>
              <p className="text-secondary line-through">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
