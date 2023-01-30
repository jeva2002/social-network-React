import { ContactData } from '../../../../../types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noPhoto from '../../../../../assets/icons/no-photo.svg';
import search from '../../../../../assets/icons/search.svg';
import arrow from '../../../../../assets/icons/arrow-left.svg';
import { setActive } from '../../../../../controller/features';
import { getCurrentUser } from '../../../../../controller/features/currentUser';

interface Props {
  currentChat: ContactData | undefined;
}

const CurrentContact: React.FunctionComponent<Props> = ({ currentChat }) => {
  const currentUser = useSelector(getCurrentUser);

  const dispatch = useDispatch();

  const [name, setName] = useState<string | number | undefined>(
    currentChat?.cel
  );
  const [profilePic, setProfilePic] = useState(
    currentChat?.profileImg ?? noPhoto
  );

  useEffect(() => {
    setName(currentChat?.cel);
    setProfilePic(currentChat?.profileImg ?? noPhoto);
  }, [currentChat]);

  useEffect(() => {
    const nickname = currentUser?.contacts?.find(
      (e: any) => e.cel === currentChat?.cel
    );
    if (nickname?.contact !== '') setName(nickname?.contact);
  }, [currentChat?.cel, currentUser?.contacts]);

  return (
    <section className='gray px-2 d-flex justify-content-between align-items-center pt-3 pb-2 px-5'>
      <img
        className='click icon col-2 d-md-none'
        src={arrow}
        alt='Volver'
        onClick={() => dispatch(setActive())}
      />
      <div className='d-flex col-8 gap-3'>
        <img
          className='profile'
          src={profilePic}
          alt='Foto de perfil'
          onError={() => setProfilePic(noPhoto)}
        />
        <div className='d-flex flex-column col-8 justify-content-center'>
          <h2 className='mb-0' style={{ fontSize: 24 }}>
            {name ? name : currentChat?.cel}
          </h2>
          <small>Status</small>
        </div>
      </div>
      <img className='click icon' src={search} alt='Buscar en el chat' />
    </section>
  );
};

export default CurrentContact;
