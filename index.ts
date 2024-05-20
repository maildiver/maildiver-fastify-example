import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { maildiver } from './maildiver';

const server = fastify();

server.post('/send-email', async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const maildiverRes = await maildiver.email.send({
      to: 'sudo@example.com',
      from: 'you@example.com',
      subject: 'Email from the Maildiver Node.js SDK',
      html: '<p>Hi {{ firstName }}! Maildiver Node.js SDK is awesome!</p>',
      variables: {
        values: {
          firstName: 'Developer Name',
        },
        default_values: {
          fistName: 'there',
        },
      },
    });

    reply.code(200).send(maildiverRes);
  } catch (err) {
    reply.code(400).send(err);
  }
});

const PORT = parseInt(process.env.PORT ?? '8080', 10);

server.listen({ port: PORT }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at http://localhost:${PORT}`);
});
