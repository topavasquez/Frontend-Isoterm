import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, lastname, email, title, description, number } = req.body;

        // Configuración del transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true para puerto 465, false para otros
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        // Correo de confirmación al usuario
        const mailOptionsToSender = {
            from: 'isotermtesting@gmail.com',
            to: email,
            subject: 'Confirmación de contacto',
            text: `Hola ${name}, hemos recibido tu solicitud de contacto "${title}". Te responderemos lo más rápido posible.`,
        };

        // Correo de notificación a ti
        const mailOptionsToYou = {
            from: 'isotermtesting@gmail.com',
            to: 'isotermtesting@gmail.com',  // Tu correo de notificación
            subject: 'Nueva solicitud de contacto recibida',
            text: `Has recibido una solicitud de ${name} ${lastname}.\n 
            Detalles:\n
             Email: ${email}\n
             Teléfono: ${number}\n
             Título: ${title}\n
             Descripción: ${description}`,
        };

        try {
            // Enviar correo al usuario
            await transporter.sendMail(mailOptionsToSender);
            // Enviar correo de notificación
            await transporter.sendMail(mailOptionsToYou);

            // Responder con éxito
            res.status(200).json({ message: 'Correos enviados exitosamente' });
        } catch (error) {
            // Responder con error
            console.error('Error al enviar correos:', error);
            res.status(500).json({ error: 'Error al enviar correos' });
        }
    } else {
        // Responder con método no permitido si no es un POST
        res.status(405).json({ error: 'Método no permitido' });
    }
}
