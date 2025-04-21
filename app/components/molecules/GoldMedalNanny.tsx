"use client";

import React from "react";
import { useAppSelector } from "@/app/store/hooks";

export default function GoldMedalNanny() {
  const { translations } = useAppSelector((state) => state.language);
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold mx-4 mb-2">
        {translations["nanny.gold_medal"]}
      </h2>
      <div className="flex flex-col gap-3 px-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-3 py-2">
            <div
              className="w-[60px] h-[60px] rounded-sm bg-gray-200"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" fill="%23f0f0f0"/><circle cx="30" cy="25" r="12" fill="%23e0e0e0"/><rect x="15" y="35" width="30" height="20" rx="5" fill="%23e0e0e0"/></svg>')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="flex-1">
              <h3 className="text-base font-medium mb-1">Mary Poppins</h3>
              <p className="text-sm text-gray-600">
                {translations["nanny.maternity"]}
              </p>
            </div>
            <button className="px-3 py-2 bg-gray-100 text-gray-800 border-none rounded-full text-sm">
              {translations["nanny.hire"]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
