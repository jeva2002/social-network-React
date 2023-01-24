import { useState, Dispatch, SetStateAction } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { User } from './functions/services/types';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './model/db/config/firestoreConfig';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();


const App: React.FunctionComponent = (props) => {
  const [user, setUser] = useState<User>();

  return (
    <main className='container-fluid p-0 m-0'>
      <Outlet context={{ setUser, user }} />
    </main>
  );
};

export default App;

export function useCurrentUser() {
  return useOutletContext<{
    setUser: Dispatch<SetStateAction<User | undefined>>;
    user: User | undefined;
  }>();
}
