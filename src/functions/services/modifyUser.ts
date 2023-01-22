import baseInstance from './config/axiosInstance';
import routes from './config/routes';
import { UpdateUser } from './types';

export const modifyUser = async (id: number | undefined, user: UpdateUser) => {
  if (id) return await (await baseInstance.patch(routes.users.index + `/${id}`, user)).data;
};
