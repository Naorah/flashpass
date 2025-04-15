import { PRIVATE_WEBHOOK_URL } from '$env/static/private';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const nom = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const res = await fetch(PRIVATE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: "Nouveau message de contact",
            color: 0x6366f1,
            fields: [
              {
                name: "Nom",
                value: nom,
                inline: true
              },
              {
                name: "Email",
                value: email,
                inline: true
              },
              {
                name: "Message",
                value: message
              }
            ],
            timestamp: new Date().toISOString()
          }]
        })
      });

      if (!res.ok) {
        console.error('Erreur Webhook:', await res.text());
        return { success: false };
      }

      return { success: true };
    } catch (err) {
      console.error('Erreur serveur:', err);
      return { success: false };
    }
  }
};

