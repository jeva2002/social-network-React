import { useState, Dispatch, SetStateAction } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { User } from './functions/services/types';

const App: React.FunctionComponent = (props) => {
  const [user, setUser] = useState<User>();

  return (
    <main className='container-fluid'>
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
