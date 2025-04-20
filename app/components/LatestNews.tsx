"use client";
import Image from "next/image";
import React from "react";

export default function LatestNews() {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold mx-4 mb-2">最新资讯</h2>
      <div className="grid grid-cols-2 gap-3 px-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/newsTest.png"
                className="object-cover"
                alt="News Image"
                fill
                sizes="(max-width: 430px) 50vw, 25vw"
              />
            </div>
            <p className="p-2 text-sm font-medium">
              Tip: Ask for Certifications
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
