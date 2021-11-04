import { Button } from "antd";
import React from "react";
import Image from "next/image";
import _classes from "./Jumbotron.module.scss";

function Jumbotron() {
  return (
    <div className={`${_classes["home-jumbotron"]}`}>
      <div className="flex h-px-500 container mx-auto">
        <div className="flex-1 flex items-center relative">
          <div className="h-px-300 w-px-250 absolute top-0 -left-48">
            <Image
              alt=""
              src="/assets/lamp.png"
              layout="responsive"
              height="300"
              width="300"
            />
          </div>
          <div>
            <p className="mb-2">Best Furniture for your castle...</p>
            <h1 className="text-4xl font-bold mb-6">
              <span className="block">New Furniture Collection</span>
              <span className="block">Trends in 2020</span>
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consectetur adipisicing elit. consectetur adipisicing elit.
            </p>
            <Button type="primary">Shop Now</Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-full w-px-450 m-auto relative">
            <div className="h-min	w-full absolute top-1/2 transform -translate-y-1/2	">
              <Image
                alt=""
                src="/assets/sofa.png"
                layout="responsive"
                height="500"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
