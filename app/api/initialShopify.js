import Shopify from 'shopify-api-node';

const shopify = new Shopify({
	shopName: process.env.GARY6666_SHOP_NAME,
	apiKey: process.env.GARY6666_API_KEY,
	password: process.env.GARY6666_ACCESS_TOKEN,
});

export default shopify;
