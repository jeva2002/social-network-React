import baseInstance from './config/axiosInstance';
import routes from './config/routes';

export const connect = async (_id: string | number) =>
  await baseInstance.patch(routes.users.index + _id, {
    isConnected: true,
    lastTime: new Date().toLocaleDateString('en-US'),
  });

export const disconnect = async (_id: string | number) =>
  await baseInstance.patch(routes.users.index + _id, { isConnected: false });
