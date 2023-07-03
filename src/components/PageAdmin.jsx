import React from 'react';
import { adminPasswordUrl, adminPasswordWeb } from '../var';
import { Navigate } from 'react-router-dom';

const PageAdmin = () => {
  const [password, setPassword] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === adminPasswordWeb) {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (loggedIn) {
    return <Navigate replace to={`/${adminPasswordUrl}`} />;
  }
  return (
    <>
      <div className="fon-bg"></div>
      <div className="admin__container">
        <form className="admin__password-page" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className="form__input auto-shop__input--admin"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder=" "></input>
            <label className="form__lable auto-shop__label--admin">Введите пароль</label>
          </div>
          <button className="auto-shop__left-btn" type="submit">
            войти как Админ
          </button>
        </form>
      </div>
    </>
  );
};

export default PageAdmin;
