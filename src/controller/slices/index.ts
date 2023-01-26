import currentUserReducer from './currentUser';
import { setCurrentUser, clearCurrentUser } from './currentUser';
import { setMenuView, setFilter } from './menuView';
import { getAllContacts, setContacts } from './contacts';
import contactsReducer from './contacts';
import menuViewReducer from './menuView';

export {
  currentUserReducer,
  setCurrentUser,
  clearCurrentUser,
  menuViewReducer,
  setMenuView,
  setFilter,
  contactsReducer,
  getAllContacts,
  setContacts,
};
