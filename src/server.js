import { Server } from 'http';
import config from './config/server';
import app from './app';

let {ip, portExpress} = config;

let httpServer = Server(app);

httpServer.listen(portExpress, ip, () => {
  console.log(`listening on ${ip}:${portExpress}`);
});


export default httpServer;