import { T_product } from "@/app/api/products/route";
import ApiClient from "@/app/class/ApiClient";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const newRes = await ApiClient.get<T_product>(`/api/products/${slug}`, {
    slug: slug,
  });

  console.log("newRes", newRes);

  return <div>new Page</div>;
};

export default Page;
