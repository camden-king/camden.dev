import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ msg: 'Please provide a name, email, and message.' });
      return;
    }

    try {
      await sendgrid.send({
        to: process.env.PRIVATE_CONTACT_ME_EMAIL,
        from: {
          email: process.env.SEND_FROM_EMAIL,
          name: name,
        },
        replyTo: email,
        subject: `New message from ${name} | Camden.dev contact form`,
        text: message,
      });
    } catch (error) {
      // If sendgrid returns an error we return it to the client
      return res.status(error.statusCode || 500).json({ error: error });
    }
  
    return res.status(200).json({ error: '' });
  } else {
    res.status(405).json({
      message: 'Method not allowed.',
    });
  }
}