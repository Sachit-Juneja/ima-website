import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { name, email, measurement, advantage } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required." },
        { status: 400 }
      );
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey || secretKey.includes("placeholder")) {
      return NextResponse.json(
        {
          error:
            "Stripe Secret Key is missing or unconfigured. Please add STRIPE_SECRET_KEY to .env.local",
        },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create(
      {
        // Managed Payments Blueprint Requirement
        managed_payments: {
          enabled: true,
        },
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: "IMA Membership Verification Dues",
                description: `Lifetime Verification Dues for ${name} (${measurement || "Verified Member"})`,
                tax_code: "txcd_10103100", // Eligible tax code for Managed Payments (Digital Media / Goods)
                images: [
                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
                ],
              },
              unit_amount: 4500, // $45.00 CAD
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        customer_email: email,
        metadata: {
          legalName: name,
          measurement: measurement || "Unspecified",
          tacticalAdvantage: advantage ? advantage.substring(0, 450) : "N/A",
        },
        success_url: `${origin}/join/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/join/cancel`,
      },
      {
        // Required by Managed Payments Blueprint
        apiVersion: "2026-02-25.preview" as Stripe.LatestApiVersion,
      }
    );

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Stripe Checkout Error:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
