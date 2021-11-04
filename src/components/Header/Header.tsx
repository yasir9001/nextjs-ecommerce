import { Button, Input } from "antd";
import React, { ReactElement } from "react";
import Image from "next/image";

import { SearchOutlined } from "@ant-design/icons";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <div className="container mx-auto flex py-4">
      <div className="flex-1 flex items-center">
        <div className="mr-14">
          <Image alt="logo" height="32" width="100" src="/assets/logo.svg" />
        </div>
        <div>
          <ul className="flex">
            <li className="mr-6">
              <a>Home</a>
            </li>
            <li className="mr-6">
              <a>Pages</a>
            </li>
            <li className="mr-6">
              <a>Products</a>
            </li>
            <li className="mr-6">
              <a>Blogs</a>
            </li>
            <li className="mr-6">
              <a>Shop</a>
            </li>
            <li className="mr-6">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <Input />
        <Button type="primary" className="min-h-full">
          <SearchOutlined height="2rem" width="2rem" />
        </Button>
      </div>
    </div>
  );
}

export default Header;
