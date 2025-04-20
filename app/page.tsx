import Image from "next/image";
import LatestNews from "./components/LatestNews";
import BeginnerCourses from "./components/BeginnerCourses";
import GoldMedalNanny from "./components/GoldMedalNanny";
import BottomNavigation from "./components/BottomNavigation";

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Header */}
      <div className="w-full bg-white z-10">
        <div className="flex justify-between items-center px-4 py-2">
          <h1 className="text-lg font-bold">悉尼妈妈</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-16">
        {/* Hero Section */}
        <div className="w-full h-[220px] mb-4 relative">
          {/* Nursery image */}
          <Image
            src="/images/hero.png"
            className="object-cover"
            alt="Hero Image"
            fill
            sizes="(max-width: 430px) 100vw, 430px"
            priority
          />
        </div>

        {/* Latest News Section */}
        <LatestNews />

        {/* Beginner Courses Section */}
        <BeginnerCourses />

        {/* Gold Medal Nanny Section */}
        <GoldMedalNanny />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
