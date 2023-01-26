// import { useState } from 'react';
// import { User } from '../../../functions/services/types';
// import edit from '../../../assets/edit-2.svg';
// import FormControl from 'react-bootstrap/esm/FormControl';
// import Button from 'react-bootstrap/Button';
// import updateUser from '../../../functions/controller/modifyUser';
// import camera from '../../../assets/camera.svg';

// interface Props {
//   user: User | undefined;
//   setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
// }

const Options: React.FunctionComponent = ({  }) => {
  // const [editImg, setEditImg] = useState(false);
  // const [editName, setEditName] = useState(false);
  // const [img, setImg] = useState(user?.profileImg);
  // const [name, setName] = useState(user?.name);
  // const [mouseOver, setMouseOver] = useState(false);

  return (
    <form
      // className='m-0 d-flex flex-column gap-3'
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   updateUser(
      //     {
      //       name: name,
      //       profileImg: img,
      //     },
      //     user
      //   ).then((res) => setUser(res));
      // }}
    >
      {/* <figure
        className=' align-self-center my-3'
        style={{
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        onClick={() => setEditImg(!editImg)}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {!mouseOver ? (
          <img
            className='pic-options'
            src={user?.profileImg}
            alt='Profile pic'
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
            }}
          />
        ) : (
          <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              backgroundColor: '#bbb',
            }}
          >
            <img src={camera} alt='Editar' />
            <small>Cambiar imagen</small>
          </div>
        )}
      </figure>
      {editImg ? (
        <div className='p-4'>
          <h3 style={{ fontSize: 22 }}>Imagen</h3>
          <FormControl
            name='img'
            onChange={(e) => setImg(e.currentTarget.value)}
            type='url'
            placeholder='Escriba el nuevo url de la imagen'
          />
        </div>
      ) : null}
      <div
        className='p-4'
        style={{
          backgroundColor: '#fff',
        }}
      >
        <h3 style={{ fontSize: 22 }}>Nombre</h3>
        {editName ? (
          <FormControl
            name='name'
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder='Escriba el nuevo nombre'
          />
        ) : (
          <div className='d-flex justify-content-between'>
            <b>{user?.name}</b>
            <img
              src={edit}
              alt='Editar'
              onClick={() => setEditName(!editName)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}
      </div>
      {editImg || editName ? (
        <div className='d-flex justify-content-evenly'>
          <Button
            variant='outline-info'
            onClick={() => {
              setEditImg(false);
              setEditName(false);
            }}
          >
            Cancelar
          </Button>
          <Button variant='info' type='submit'>
            Guardar
          </Button>
        </div>
      ) : null} */}
    </form>
  );
};

export default Options;
