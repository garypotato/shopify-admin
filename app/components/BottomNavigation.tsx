"use client";
import { useState } from "react";

type TabType = "home" | "news" | "course";

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <div className="fixed bottom-0 w-full max-w-[430px] flex justify-around bg-white border-t border-gray-200 py-2 z-10">
      <div
        className={`flex flex-col items-center text-sm cursor-pointer py-1 flex-1 text-center ${
          activeTab === "home" ? "font-bold" : ""
        }`}
        onClick={() => setActiveTab("home")}
      >
        <span>首页</span>
      </div>
      <div
        className={`flex flex-col items-center text-sm cursor-pointer py-1 flex-1 text-center ${
          activeTab === "news" ? "font-bold" : ""
        }`}
        onClick={() => setActiveTab("news")}
      >
        <span>资讯</span>
      </div>
      <div
        className={`flex flex-col items-center text-sm cursor-pointer py-1 flex-1 text-center ${
          activeTab === "course" ? "font-bold" : ""
        }`}
        onClick={() => setActiveTab("course")}
      >
        <span>课程</span>
      </div>
    </div>
  );
}
