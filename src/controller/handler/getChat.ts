import { queryOperators, usersCollection } from '../../model/db/config';
import { getWithQuery } from '../../model/db/crud';
import { ContactData } from '../../model/types';

const getContacts = async (cel: number) => {
  const contact: any = await getWithQuery(
    usersCollection,
    'cel',
    queryOperators.equal,
    cel
  );
  return {
    id: contact[0].id,
    cel,
    description: contact[0].description,
    profileImg: contact[0].profileImg,
  };
};

export default getContacts;
