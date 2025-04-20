import { NextResponse } from "next/server";
import shopify from "../initialShopify";

export async function GET() {
  let collections;

  try {
    collections = await shopify.customCollection.list();

    return new Response(JSON.stringify({ data: collections, error: null }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ data: null, error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
