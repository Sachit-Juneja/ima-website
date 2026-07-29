import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || secretKey.includes("placeholder")) {
    return NextResponse.json(
      { error: "Stripe Secret Key is missing." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);
  const signature = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    const body = await req.text();

    if (webhookSecret && signature) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      // Fallback for development without configured webhook secret
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Webhook signature error";
    console.error(`Webhook Error: ${errorMsg}`);
    return NextResponse.json({ error: `Webhook Error: ${errorMsg}` }, { status: 400 });
  }

  // Handle checkout.session.completed as per blueprint specification
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[Stripe Webhook] Checkout session ${session.id} completed successfully!`);
      console.log(`[Stripe Webhook] Member details:`, session.metadata);
      break;
    }
    default:
      console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
