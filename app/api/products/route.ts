import { NextRequest, NextResponse } from "next/server";
import shopify from "../initialShopify";

export async function GET() {
  let products;

  try {
    products = await shopify.product.list();

    return new Response(
      JSON.stringify({ success: true, data: products, error: null }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, data: null, error: errorMessage }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function POST(request: NextRequest) {
  let products;

  try {
    const body = await request.json();

    products = await shopify.product.list({ ...body });

    return new Response(
      JSON.stringify({ success: true, data: products, error: null }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, data: null, error: errorMessage }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
