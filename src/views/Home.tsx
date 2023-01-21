import Swal from 'sweetalert2';
import Menu from '../components/Home/Menu';
import { useCurrentUser } from '../App';

const Home: React.FunctionComponent = (props) => {
  const { user } = useCurrentUser()

  Swal.fire(`Bienvenido ${user?.name}`);

  return (
    <>
      <Menu user={user}/>
    </>
  );
};

export default Home;
