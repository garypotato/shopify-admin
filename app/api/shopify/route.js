import Shopify from 'shopify-api-node';

const shopify = new Shopify({
	shopName: process.env.GARY6666_SHOP_NAME,
	apiKey: process.env.GARY6666_API_KEY,
	password: process.env.GARY6666_ACCESS_TOKEN,
});

export async function GET() {
	let products;

	try {
		products = await shopify.product.list();
		console.log('Products fetched:', products);

		return new Response(JSON.stringify({ data: products, error: null }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching products:', error);

		return new Response(JSON.stringify({ data: null, error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
