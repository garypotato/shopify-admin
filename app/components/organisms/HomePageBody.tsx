import { ShopifyCollection } from "@/app/api/collections/route";
import LatestNews from "../LatestNews";
import ApiClient, { ApiResult } from "@/app/class/ApiClient";
import { T_product } from "@/app/api/products/route";
import GoldMedalNanny from "../molecules/GoldMedalNanny";

const HomePageBody = async () => {
  const res = await ApiClient.get<ShopifyCollection[]>("/api/collections");

  if (!res.success) {
    return <div>Error loading collections</div>;
  } else {
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

    if (collectionResults[0].success && !collectionResults[1].success) {
      return <LatestNews products={collectionResults[0].data} />;
    } else if (!collectionResults[0].success && collectionResults[1].success) {
      <GoldMedalNanny />;
    } else if (collectionResults[0].success && collectionResults[1].success) {
      return (
        <>
          <LatestNews products={collectionResults[0].data} />
          <GoldMedalNanny />
        </>
      );
    } else {
      return <div>Error loading collections</div>;
    }
  }
};

export default HomePageBody;
