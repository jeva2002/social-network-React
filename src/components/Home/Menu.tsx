import { useState, useContext, useEffect } from 'react';
// import { CurrentUser } from '../../App';
import getChats from '../../functions/services/getChats';
import { Chat, User } from '../../functions/services/types';
import ChatsHistory from './ChatsHistory';

interface Props {
  user: User | undefined;
}

const Menu: React.FunctionComponent<Props> = ({ user }) => {
  const [chatsList, setChatsList] = useState<Chat[]>()

  useEffect(() => {
    getChats(user?.id).then((res) => setChatsList(res)).catch(e => console.log(e))
  }, [])

  return (
    <menu className='container-fluid col-4'>
      <section className='ms-3 my-4 d-flex justify-content-start gap-1' style={{ width: 75, height: 75}}>
        <img className='' src={user?.profileImg} alt='Profile pic'/>
      </section>
      <ChatsHistory chatsList={chatsList} userId={user?.id}/>
    </menu>
  );
};

export default Menu;
