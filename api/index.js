import server from './src/app.js';
import { conn } from './src/db.js';

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`); // eslint-disable-line no-console
  });
});