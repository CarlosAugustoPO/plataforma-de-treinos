import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
});

export default async function handler(req, res) {
  const id = req.query.id;
  try {
    const promotion_code = await stripe.promotionCodes.retrieve(
      id,
    );

    res.status(200).json(promotion_code);
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : 'Internal server error';
    res
      .status(500)
      .json({ statusCode: 500, message: errorMessage });
  }
}
