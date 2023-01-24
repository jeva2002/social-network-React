import { createAccount, createDoc } from '../model/db/crud';
import { User } from '../model/types';

const handleRegister = async (user: User) => {
  try {
    const credential = await createAccount(user.email, user.password);
    const document = await createDoc({ ...user, chat: [] });
    console.log(credential);
    console.log(document);
  } catch (error) {
    console.log(error);
  }
};

export default handleRegister;
