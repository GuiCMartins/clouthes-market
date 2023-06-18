import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={'/'}>
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={'/shop'}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={'/auth'}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
