import mongoose from 'mongoose';
import logger from './logger';

const connect = (uri: string): void => {
  mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 2,
    connectTimeoutMS: 60000,
  })
    .then((conn) => {
      const { host, name } = conn.connection;
      logger().info(`MongoDB connected to: ${host}/${name}`);
    })
    .catch((err) => {
      logger().error(`MongoDB error: ${err}`);
      process.exit(1);
    });
};

export default connect;
