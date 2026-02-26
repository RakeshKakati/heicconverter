const Stripe = require("stripe");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    console.error("STRIPE_SECRET_KEY is not set");
    return res.status(500).json({ error: "Payment not configured" });
  }

  const stripe = new Stripe(secret);
  const origin = req.headers["x-forwarded-host"]
    ? `https://${req.headers["x-forwarded-host"]}`
    : req.headers.origin || "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Bulk HEIC Conversion",
              description: "Unlock conversion of multiple HEIC files at once. One-time purchase.",
              images: process.env.STRIPE_PRODUCT_IMAGE
                ? [process.env.STRIPE_PRODUCT_IMAGE]
                : undefined,
            },
            unit_amount: Number(process.env.STRIPE_BULK_PRICE_CENTS) || 499,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?bulk_success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#converter`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err.message);
    res.status(500).json({ error: err.message || "Failed to create checkout" });
  }
};
