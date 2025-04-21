import { ShopifyCollection } from "@/app/api/collections/route";
import LatestNews from "../page/LatestNews";
import ApiClient, { ApiResult } from "@/app/class/ApiClient";
import { T_product } from "@/app/api/products/route";
import GoldMedalNanny from "../molecules/GoldMedalNanny";

const HomePageBody = async () => {
  const res = await ApiClient.get<ShopifyCollection[]>("/api/collections");

  if (!res.success) {
    return <div>Error loading collections</div>;
  }

  const collections = res.data;

  let collectionPromises: Promise<ApiResult<T_product[]>>[] = [];
  collections.forEach((collection) => {
    collectionPromises.push(
      ApiClient.post<T_product[]>(
        "/api/products",
        {
          collection_id: collection.id,
        },
        {}
      )
    );
  });

  const collectionResults = await Promise.all(collectionPromises);

  // Prepare data for client components
  const newsProducts = collectionResults[0]?.success
    ? collectionResults[0].data
    : [];

  // Render client components with data
  return (
    <>
      <LatestNews products={newsProducts} />
      <GoldMedalNanny />
    </>
  );
};

export default HomePageBody;
