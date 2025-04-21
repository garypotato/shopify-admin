"use client";
import { T_product } from "@/app/api/products/route";
import Image from "next/image";
import React, { useEffect } from "react";

interface LatestNewsProps {
  products: T_product[];
}

const BeginnerCourses: React.FC<LatestNewsProps> = ({ products }) => {
  console.log("🚀 ~ products:", products);
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold mx-4 mb-2">新手课程</h2>
      <div className="flex flex-col gap-3 px-4">
        {products.map((item) => (
          <div key={item.id} className="flex items-center gap-3 py-2">
            <Image
              className="w-[60px] h-[60px] rounded bg-gray-200"
              src={item.image?.src}
              alt="News Image"
              fill
              sizes="(max-width: 430px) 50vw, 25vw"
            />
            <div className="flex-1">
              <h3 className="text-base font-medium mb-1">The ABCs of Sleep</h3>
              <p className="text-sm text-gray-600">Nanny Lorraine</p>
            </div>
            <button className="px-3 py-2 bg-gray-100 text-gray-800 border-none rounded-full text-sm">
              Watch lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeginnerCourses;
