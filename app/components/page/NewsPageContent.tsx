"use client";

import React from "react";
import { T_product } from "@/app/api/products/route";
import Image from "next/image";
import Header from "../molecules/Header";
import { useAppSelector } from "@/app/store/hooks";

interface NewsPageContentProps {
  product: T_product;
}

const NewsPageContent: React.FC<NewsPageContentProps> = ({ product }) => {
  const { translations } = useAppSelector((state) => state.language);

  return (
    <div className="max-w-[430px] mx-auto min-h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-16 px-4">
        {product.image && (
          <div className="w-full h-[220px] mb-4 relative">
            <Image
              src={product.image.src}
              className="object-cover"
              alt={product.title}
              fill
              sizes="(max-width: 430px) 100vw, 430px"
              priority
            />
          </div>
        )}

        <h1 className="text-xl font-bold mb-4">{product.title}</h1>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: product.body_html || "" }}
        />
      </div>
    </div>
  );
};

export default NewsPageContent;
