import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const amount = req.body.amount;
    const clientEmail = req.body.clientEmail;
    const clientName = req.body.clientName;
    const description = req.body.description;
    const date = req.body.date;
    const time = req.body.time;
    const weekDay = req.body.weekDay;
    const initialTime = req.body.initialTime;
    const finalTime = req.body.finalTime;
    const location = req.body.location;
    const plusInfo = req.body.plusInfo;
    const productName = req.body.productName;
    const accompanimentName = req.body.accompanimentName;
    const accompanimentEmail = req.body.accompanimentEmail;
    try {
      // Validate the amount that was passed from the client.
      const params = {
        submit_type: 'pay',
        customer_email: clientEmail,
        payment_method_types: ['card', 'boleto'],
        allow_promotion_codes: true,
        locale: 'pt-BR',
        payment_intent_data: {
          receipt_email: clientEmail,
          description: description,
        },
        metadata: {
          date: date,
          time: time,
          initialTime: initialTime,
          finalTime: finalTime,
          weekDay: weekDay,
          location: location,
          clientName: clientName,
          clientEmail: clientEmail,
          plusInfo: plusInfo,
          accompanimentEmail: accompanimentEmail,
          accompanimentName: accompanimentName,
        },
        line_items: [
          {
            description: description,
            name: productName,
            amount: amount,
            currency: 'BRL',
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
      };
      const checkoutSession =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Internal server error';
      res
        .status(500)
        .json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
