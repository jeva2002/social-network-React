import { useSelector } from 'react-redux';
import CurrentUserProfile from './userOptions/CurrentUserProfile';
import Menu from './userOptions/Menu';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const setUserOptionsView = (userOptions: string, props: Props) => {
  switch (userOptions) {
    case 'profile':
      return <CurrentUserProfile />;
    default:
      return <Menu active={props.active} setActive={props.setActive} />;
  }
};

const UserOptions: React.FunctionComponent<Props> = (props) => {
  const userOptions: string = useSelector(
    (state: any) => state.globalView.userOptions
  );

  return <>{setUserOptionsView(userOptions, props)}</>;
};

export default UserOptions;
