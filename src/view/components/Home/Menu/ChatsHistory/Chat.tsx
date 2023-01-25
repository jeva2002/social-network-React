import { useEffect, useState } from 'react';
import { getContacts } from '../../../../../controller/handler';
import { Contact, ContactData } from '../../../../../model/types';
import noPhoto from '../../../../../assets/no-photo.svg';

interface Props {
  contact: Contact;
}

const Chat: React.FunctionComponent<Props> = ({ contact }) => {
  const [contactData, setContactData] = useState<ContactData>();
  const [profilePic, setProfilePic] = useState(noPhoto);

  useEffect(() => {
    getContacts(Number(contact.cel))
      .then((res) => {
        setContactData(res);
        setProfilePic(res.profileImg);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <article
      className='d-flex border-bottom py-3 px-2 gap-3'
      style={{ maxHeight: 100, overflow: 'hidden' }}
      onClick={() => {}}
    >
      <img
        className='profile'
        src={profilePic}
        alt='Profile pic'
        onError={() => setProfilePic(noPhoto)}
      />
      <div>
        <h3 style={{ fontSize: 20 }}>
          {contact.contact === '' ? contact.cel : contact.contact}
        </h3>
        <small>{}</small>
      </div>
    </article>
  );
};

export default Chat;
