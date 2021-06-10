import routes from './server/api/routes';
import { port } from './server/common/environmentManager';
import Server from './server/common/server';

const app = new Server()
  .router(routes)
  .listen(Number(port));

export default app;
