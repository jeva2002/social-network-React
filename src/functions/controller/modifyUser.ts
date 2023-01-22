import { modifyUser } from '../services';
import { UpdateUser, User } from '../services/types';

const formatData = (user: UpdateUser, currentUser: User | undefined) => {
  const formatedUser: UpdateUser = {};
  if (user.name) {
    if (user.name !== '' && user.name !== currentUser?.name)
      formatedUser.name = user.name;
  }
  if (user.profileImg) {
    if (user.profileImg !== '' && user.profileImg !== currentUser?.profileImg)
      formatedUser.profileImg = user.profileImg;
  }
  return formatedUser;
};

const updateUser = (updateUser: UpdateUser, currentUser: User | undefined) => {
  const user = formatData(updateUser, currentUser);
  return modifyUser(currentUser?.id, user);
};

export default updateUser;
