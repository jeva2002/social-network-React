import baseInstance from './config/axiosInstance';
import routes from './config/routes';

const getChats = async (id: number | undefined) => {
  if (id) {
    const startedByCurrentUser = await (
      await baseInstance.get(routes.messages.index + `?idUserOne=${id}`)
    ).data;
    const startedByOther = await (
      await baseInstance.get(routes.messages.index + `?idUserTwo=${id}`)
    ).data;
    return startedByCurrentUser.concat(startedByOther);
  }
};

export default getChats;
