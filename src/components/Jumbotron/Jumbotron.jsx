import { Button } from "antd";
import React from "react";
import Image from "next/image";
import Container from "../Container/container";
import _classes from "./Jumbotron.module.scss";

function Jumbotron() {
  return (
    <div className={`${_classes["home-jumbotron"]} mb-20`}>
      <Container>
        <div className="flex h-px-700 mx-auto">
          <div className="flex-1 flex items-center relative">
            <div className="h-px-300 w-px-350 absolute top-0 -left-64">
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
              <h1 className="text-5xl font-bold mb-6">
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
          <div className="flex-1 flex justify-end">
            <div className="h-full w-px-650 relative -right-40	">
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
      </Container>
    </div>
  );
}

export default Jumbotron;
