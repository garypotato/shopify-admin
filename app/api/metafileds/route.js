import shopify from '../initialShopify';

export async function POST(request) {
	let metafields;

	try {
		const { owner_resource, owner_id } = await request.json();

		metafields = await shopify.metafield.list({
			metafield: {
				owner_resource,
				owner_id,
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
