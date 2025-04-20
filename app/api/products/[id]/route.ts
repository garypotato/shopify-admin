import { NextRequest, NextResponse } from "next/server";
import shopify from "../../initialShopify";

// Using a more permissive type to work around Next.js type issues
export async function GET(request: NextRequest, context: any) {
  const params = context.params;
  try {
    const id = params.id;
    const product = await shopify.product.get(parseInt(id, 10));

    return NextResponse.json(
      { data: product, error: null },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { data: null, error: errorMessage },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
