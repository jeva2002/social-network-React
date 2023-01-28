import { ContactData } from '../../../../../model/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import noPhoto from '../../../../../assets/icons/no-photo.svg';
import search from '../../../../../assets/icons/search.svg';

interface Props {
  currentChat: ContactData | undefined;
}

const CurrentContact: React.FunctionComponent<Props> = ({ currentChat }) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [name, setName] = useState<number | undefined>(currentChat?.cel);
  const [profilePic, setProfilePic] = useState(
    currentChat?.profileImg ?? noPhoto
  );
  
  useEffect(() => {
    setName(currentChat?.cel)
    setProfilePic(currentChat?.profileImg ?? noPhoto)
  }, [currentChat])

  const nickname = currentUser?.contacts?.find(
    (e: any) => e.cel === currentChat?.cel
  );

  useEffect(() => {
    if (nickname?.contact !== '') setName(nickname?.contact);
  }, [nickname?.contact])

  return (
    <section className='gray px-2 d-flex justify-content-between align-items-center pt-3 pb-2 px-5'>
      <div className='d-flex gap-3'>
        <img
          className='profile'
          src={profilePic}
          alt='Foto de perfil'
          onError={() => setProfilePic(noPhoto)}
        />
        <div className='d-flex flex-column justify-content-center'>
          <h2 className='mb-0' style={{ fontSize: 24 }}>{name}</h2>
          <small>Status</small>
        </div>
      </div>
      <img src={search} alt='Buscar en el chat' />
    </section>
  );
};

export default CurrentContact;
