import { T_product } from "@/app/api/products/route";
import ApiClient from "@/app/class/ApiClient";
import NewsPageContent from "@/app/components/page/NewsPageContent";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const newRes = await ApiClient.get<T_product>(`/api/products/${slug}`, {
    slug: slug,
  });

  if (!newRes.success) {
    return <div>Error loading product</div>;
  }

  return <NewsPageContent product={newRes.data} />;
};

export default Page;
