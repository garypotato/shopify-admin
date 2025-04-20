import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: process.env.GARY6666_SHOP_NAME as string,
  apiKey: process.env.GARY6666_API_KEY as string,
  password: process.env.GARY6666_ACCESS_TOKEN as string,
});

export default shopify;
