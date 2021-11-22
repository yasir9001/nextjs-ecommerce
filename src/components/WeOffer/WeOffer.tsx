import React, { ReactElement } from "react";
import { WeOfferCard } from "../WeOfferCard/WeOfferCard";
import _classes from "./WeOffer.module.scss";
interface Props {}

function WeOffer({}: Props): ReactElement {
  return (
    <div className={_classes["we-offer"]}>
      <WeOfferCard image="/assets/free-delivery.svg" />
      <WeOfferCard image="/assets/cashback.svg" />
      <WeOfferCard image="/assets/premium-quality.svg" />
      <WeOfferCard image="/assets/24-7-support.svg" />
    </div>
  );
}

export default WeOffer;
