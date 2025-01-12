import shopify from '../initialShopify';

export async function POST(request) {
	let metafields;

	try {
		const body = await request.json();

		metafields = await shopify.metafield.list({
			metafield: {
				...body,
			},
		});

		return new Response(JSON.stringify({ data: metafields, error: null }), {
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
