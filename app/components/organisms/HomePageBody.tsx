import { ShopifyCollection } from "@/app/api/collections/route";
import LatestNews from "../LatestNews";
import BeginnerCourses from "../molecules/BeginnerCourses";
import ApiClient from "@/app/class/ApiClient";

const HomePageBody = async () => {
  const res = await ApiClient.get<ShopifyCollection[]>("/api/collections");

  if (!res.success) {
    console.error("Error fetching collections:", res.error);
    return <div>Error loading collections</div>;
  }

  // TypeScript can now correctly narrow the type based on the success property
  const collections = res.data;

  return (
    <>
      {/* Latest News Section */}
      <LatestNews />

      {/* Beginner Courses Section */}
      <BeginnerCourses />
    </>
  );
};

export default HomePageBody;
