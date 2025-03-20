import fastify from 'fastify';

const server = () => {
  const app = fastify();

  app.post('/people', (_req, reply) => {
    reply
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ message: 'user has been created successfully' });
  });

  return app;
};

const port = 3000;

server().listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
