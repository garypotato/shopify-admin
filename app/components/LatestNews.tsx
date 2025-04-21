import Image from "next/image";
import React from "react";
import { T_product } from "../api/products/route";

interface LatestNewsProps {
  products: T_product[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ products }) => {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold mx-4 mb-2">最新资讯</h2>
      <div className="grid grid-cols-2 gap-3 px-4">
        {products.map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full aspect-square">
              <Image
                src={item.image?.src}
                className="object-cover"
                alt="News Image"
                fill
                sizes="(max-width: 430px) 50vw, 25vw"
              />
            </div>
            <p className="p-2 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
