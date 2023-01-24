import { createUserAccount, createUserDoc } from '../services/db';
import { User } from './domain/types';

const handleRegister = async (user: User) => {
  try {
    // const credential = await createUserAccount(user.email, user.password);
    // console.log(credential)
    const document = await createUserDoc(user);
    console.log(document)
  } catch (error) {
    console.log(error);
  }
};

export default handleRegister;
