const { runServer } = require('verdaccio');
const PORT = 4880;
runServer('config.yaml').then(app => {
  console.log(`Listening to: http://localhost:${PORT}`);
  app.listen(PORT);
})