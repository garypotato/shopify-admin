import shopify from '../initialShopify';

export async function GET() {
	let products;

	try {
		products = await shopify.product.list();

		return new Response(JSON.stringify({ data: products, error: null }), {
			status: 200,
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
		});
	} catch (error) {
		return new Response(JSON.stringify({ data: null, error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
		});
	}
}
