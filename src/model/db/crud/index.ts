import { authenticateUser } from '../auth/auth';
import { createAccount, createDoc } from './create';
import { getAll, getWithQuery, getOne } from './get';
import { update } from './update';
import { deleteDocument } from './delete';
import { listenDoc } from './listeners';

export {
  authenticateUser,
  createAccount,
  createDoc,
  getAll,
  getWithQuery,
  getOne,
  update,
  deleteDocument,
  listenDoc
};
