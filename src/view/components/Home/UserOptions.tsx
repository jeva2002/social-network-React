import { useSelector } from 'react-redux';
import CurrentUserProfile from './userOptions/CurrentUserProfile';
import Menu from './userOptions/Menu';

const setUserOptionsView = (userOptions: string) => {
  switch (userOptions) {
    case 'profile':
      return <CurrentUserProfile />;
    default:
      return <Menu />;
  }
};

const UserOptions: React.FunctionComponent = () => {
  const userOptions: string = useSelector(
    (state: any) => state.globalView.userOptions
  );

  return <>{setUserOptionsView(userOptions)}</>;
};

export default UserOptions;
