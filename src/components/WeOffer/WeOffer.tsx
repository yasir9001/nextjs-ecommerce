import React, { ReactElement } from "react";
import { WeOfferCard } from "../WeOfferCard/WeOfferCard";
import _classes from "./WeOffer.module.scss";
interface Props {}

function WeOffer({}: Props): ReactElement {
  return (
    <div className={_classes["we-offer"]}>
      <WeOfferCard />
      <WeOfferCard />
      <WeOfferCard />
      <WeOfferCard />
    </div>
  );
}

export default WeOffer;
