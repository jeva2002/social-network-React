import baseInstance from './config/axiosInstance';
import routes from './config/routes';

interface NewUser {
  name: string;
  cel: number | string;
  password: string;
  profileImg: string;
  description: string;
  isConnected: boolean;
  lastTime: string;
}

export const createUser = async (newUser: NewUser) => {
  return await baseInstance.post(routes.users.index, newUser);
};
