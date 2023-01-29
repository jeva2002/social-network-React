import { useSelector } from 'react-redux';
import { getUserOptions } from '../../../controller/features';
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
  const userOptions = useSelector(getUserOptions);

  return <>{setUserOptionsView(userOptions)}</>;
};

export default UserOptions;
