const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./json-server-db/db.json');
const middleware = jsonServer.defaults({
  static: './build',
});
const port = process.env.PORT || 8000;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    '/baseUrl/*': '/$1',
  }),
);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
