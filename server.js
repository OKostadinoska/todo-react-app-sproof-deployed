const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults({ static: './build' });
const PORT = process.env.PORT || 8000;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    '/todos': '/todos',
  }),
);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});