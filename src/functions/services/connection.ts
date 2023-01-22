import { DateTime } from 'luxon';
import baseInstance from './config/axiosInstance';
import routes from './config/routes';

export const connect = async (_id: number | undefined) => {
  if (_id) {
    return await baseInstance.patch(routes.users.index + _id, {
      isConnected: true,
      lastTime: new Date().toLocaleDateString('en-US', DateTime.DATE_SHORT),
    });
  }
};

export const disconnect = async (_id: number | undefined) => {
  if (_id)
    return await baseInstance.patch(routes.users.index + _id, {
      isConnected: false,
    });
};
