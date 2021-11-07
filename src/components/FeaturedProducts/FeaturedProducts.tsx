import React, { ReactElement } from "react";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import _classes from "./FeaturedProducts.module.scss";

interface Props {}

function FeaturedProducts({}: Props): ReactElement {
  return (
    <div className={_classes["featured-products"]}>
      <FeaturedProductCard />
      <FeaturedProductCard />
      <FeaturedProductCard />
      <FeaturedProductCard />
    </div>
  );
}

export default FeaturedProducts;
