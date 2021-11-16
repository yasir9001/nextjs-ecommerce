import React, { ReactElement } from "react";
import LatestProductCard from "../LatestProductCard/LatestProductCard";
import _classes from "./LatestProducts.module.scss";
interface Props {}

function LatestProducts({}: Props): ReactElement {
  return (
    <div className={`${_classes["latest-products"]} mb-12`}>
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
    </div>
  );
}

export default LatestProducts;
