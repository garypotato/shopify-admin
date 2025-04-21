"use client";

import Image from "next/image";
import React from "react";
import { T_product } from "../../api/products/route";
import Link from "next/link";
import { useAppSelector } from "@/app/store/hooks";

interface LatestNewsProps {
  products: T_product[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ products }) => {
  const { translations } = useAppSelector((state) => state.language);
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold mx-4 mb-2">
        {translations["nav.news"]}
      </h2>
      <div className="grid grid-cols-2 gap-3 px-4">
        {products.map((item) => (
          <Link
            key={item.id}
            className="rounded-lg overflow-hidden shadow-md"
            href={`/news/${item.id}`}
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
