import { useSelector } from 'react-redux';
import CurrentUserProfile from './userOptions/CurrentUserProfilte';
import Menu from './userOptions/Menu';

export const SetUserOptionsView = () => {
  const userOptions = useSelector((state: any) => state.globalView.userOptions);
  switch (userOptions) {
    case 'profile':
      return <CurrentUserProfile />;
    default:
      return <Menu />;
  }
};
