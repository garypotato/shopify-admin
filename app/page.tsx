import Image from "next/image";
import BottomNavigation from "./components/molecules/BottomNavigation";
import HomePageBody from "./components/organisms/HomePageBody";
import Header from "./components/molecules/Header";

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Header */}
      <Header />

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

        <HomePageBody />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
