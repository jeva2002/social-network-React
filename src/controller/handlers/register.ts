import { createAccount, createDoc } from '../../model/db/services';
import { NewUser } from '../../types';
import { DateTime } from 'luxon';
import { usersCollection } from '../../model/db/config';

const handleRegister = async (user: NewUser) => {
  try {
    const credential = await createAccount(user.email, user.password);
    const document = await createDoc(usersCollection, {
      ...user,
      chats: [],
      contacts: [],
      isConnected: false,
      lastTime: new Date().toLocaleDateString('en-US', DateTime.DATE_SHORT),
    });
    console.log(credential);
    console.log(document);
  } catch (error) {
    console.log(error);
  }
};

export default handleRegister;
