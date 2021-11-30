import React from "react";
import Image from "next/image";
import Container from "../Container/container";
import _classes from "./LandingInfo.module.scss";
import { Button } from "antd";
interface Props {}

const LandingInfo = (props: Props) => {
  return (
    <div className={`${_classes["landing-info"]}`}>
      <Container>
        <div className="flex h-px-450 mx-auto ">
          <div className="flex-1 flex items-center">
            <div className="h-full w-px-450">
              <div className="h-min	w-full">
                <Image
                  alt=""
                  src="/assets/sofa-2.png"
                  layout="responsive"
                  height="500"
                  width="500"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center relative">
            <div>
              <h1 className="text-4xl text-secondary font-bold mb-6">
                Unique Features Of leatest & Trending Poducts
              </h1>
              <ul className={`${_classes["info-ul-1"]} mb-4`}>
                <li className="text-lg ">
                  All frames constructed with hardwood solids and laminates
                </li>
              </ul>
              <ul className={`${_classes["info-ul-2"]} mb-4`}>
                <li className="text-lg ">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </li>
              </ul>
              <ul className={`${_classes["info-ul-3"]} mb-4`}>
                <li className="text-lg ">
                  Arms, backs and seats are structurally reinforced
                </li>
              </ul>
              <div className="flex">
                <div className="mr-4">
                  <Button className="h-px-45" type="primary">Add to Cart</Button>
                </div>
                <div>
                  <p className="text-secondary font-semibold">
                    B&B italian Sofa
                  </p>
                  <p className="text-secondary">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingInfo;
