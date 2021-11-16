import React from "react";
import Image from "next/image";

interface Props {}

export const WeOfferCard = (props: Props) => {
  return (
    <div className="px-6 p-8 flex items-center flex-col shadow-lg">
      <div>
        <Image src="/vercel.svg" alt="" height="65" width="65" />
      </div>
      <p className="text-secondary font-medium mb-4 text-lg">24/7 Support</p>
      <p className="mb-4 text-center text-secondary font-medium text-opacity-50 leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
        gravida.
      </p>
    </div>
  );
};
