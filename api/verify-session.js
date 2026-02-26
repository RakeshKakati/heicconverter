const Stripe = require("stripe");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  const sessionId = req.query.session_id;
  if (!sessionId || typeof sessionId !== "string") {
    return res.status(400).json({ ok: false, error: "Missing session_id" });
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ ok: false, error: "Not configured" });
  }

  const stripe = new Stripe(secret);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_status"],
    });

    if (session.payment_status !== "paid") {
      return res.status(200).json({ ok: false });
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Stripe verify error:", err.message);
    res.status(200).json({ ok: false });
  }
};
