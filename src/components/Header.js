import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push('/');
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push('/login');
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <div
      className='header'
      style={{ position: 'sticky', top: '0', zIndex: '1' }}
    >
      <Nav>
        <Link to='/'>
          <Logo src='/images/logo.svg' />
        </Link>
        <NavMenu>
          <a>
            <img src='images/home-icon.svg' alt='' />
            <span>HOME</span>
          </a>
          <a>
            <img src='images/search-icon.svg' alt='' />
            <span>SEARCH</span>
          </a>
          <a>
            <img src='images/watchlist-icon.svg' alt='' />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src='images/original-icon.svg' alt='' />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src='images/movie-icon.svg' alt='' />
            <span>MOVIES</span>
          </a>
          <a>
            <img src='images/series-icon.svg' alt='' />
            <span>SERIES</span>
          </a>
        </NavMenu>
        {!userName ? (
          <Login onClick={signIn}>Login</Login>
        ) : (
          <>
            <Link to='/login'>
              <UserImg onClick={signOut} src={userPhoto}></UserImg>
            </Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: var(--black-color);
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background-color: var(--white-color);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border-radius: 8px;
  border: 1px solid var(--white-color);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    background-color: var(--white-color);
    color: var(--black-color);
    border-color: transparent;
  }
`;
