interface Props {
  deleteMessage: () => void
}

const Options: React.FunctionComponent<Props> = ({ deleteMessage }) => {

  return (
    <ul className='msg-options p-3'>
      <li className="click" onClick={deleteMessage}>Eliminar mensaje</li>
    </ul>
  );
};

export default Options;
