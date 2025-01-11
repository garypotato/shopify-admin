import shopify from '../../initialShopify';

export async function GET(req, context) {
	const { id } = await context.params;

	try {
		const product = await shopify.product.get(id);
		return new Response(JSON.stringify({ data: product, error: null }), {
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
