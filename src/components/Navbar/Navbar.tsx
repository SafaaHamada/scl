import { AppDispatch, RootState } from 'redux/store';
import { Button, Drawer, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { BsChatDots } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { ImNotification } from 'react-icons/im';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Paths } from 'constants/paths';
import { RxHamburgerMenu } from 'react-icons/rx';
import { logo } from 'assets';
import { logoutUser } from 'redux/actions/userActions';
import styles from './Navbar.module.css';
import { useIsType } from 'hooks/useIsType';
import { useState } from 'react';

const Navbar = () => {
  const notifications = [
    'Your add request has been approved and the content "book name" has already been published',
    'The request to modify the content "book name" has been approved',
    'Your request to add your content "book name" has been rejected. Please make sure that the data is correct and appropriate',
    'The request to modify the content "book name" has been approved',
  ];

  const requests = [
    {
      username: 'Future Academy',
      type: 'Add request',
      bookName: 'Book name',
      date: '20/5/2023',
    },
    {
      username: 'Future Academy',
      type: 'Edit request',
      bookName: 'Book name',
      date: '20/5/2023',
    },
    {
      username: 'Mohamed Ahmed',
      type: 'Add request',
      bookName: 'Book name',
      date: '20/5/2023',
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | SVGElement>(null);
  const isTablet = useMediaQuery('(max-width:1100px)');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAdmin = useIsType('admin');
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    if (pathname !== Paths.HOME) {
      navigate(Paths.HOME, { replace: true });
    }
  };

  if (isTablet)
    return (
      <>
        <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <ul className={styles.drawerList}>
            <li
              className={pathname === Paths.HOME ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.HOME)}
            >
              Home
            </li>
            <li
              className={pathname === Paths.ABOUT ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.ABOUT)}
            >
              About
            </li>
            <li
              className={pathname === Paths.CATEGORY ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.CATEGORY)}
            >
              Categories
            </li>
            <li
              className={pathname === Paths.BOOKS ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.BOOKS)}
            >
              Books
            </li>
            <li>Community</li>
            <li
              className={pathname === Paths.SIGN_IN ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.SIGN_IN)}
            >
              Sign In
            </li>
            <li
              className={pathname === Paths.CREATE_ACCOUNT ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.CREATE_ACCOUNT)}
            >
              Create Account
            </li>
          </ul>
        </Drawer>
        <nav className={styles.navbar}>
          <div className={styles.navbarContainer}>
            <div>
              <ul className={styles.navList}>
                <li>
                  <img src={logo} alt="logo" />
                </li>
              </ul>
            </div>
            <div>
              <ul className={styles.navList}>
                <li>
                  <RxHamburgerMenu onClick={() => setIsDrawerOpen(true)} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div>
          <ul className={styles.navList}>
            <li onClick={() => navigate(Paths.HOME)}>
              <img src={logo} alt="logo" />
            </li>
            <li
              className={pathname === Paths.HOME ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.HOME)}
            >
              Home
            </li>
            <li
              className={pathname === Paths.ABOUT ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.ABOUT)}
            >
              About
            </li>
            <li
              className={pathname === Paths.CATEGORY ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.CATEGORY)}
            >
              Categories
            </li>
            <li
              className={pathname === Paths.BOOKS ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.BOOKS)}
            >
              Books
            </li>
            <li
              className={pathname === Paths.COMMUNITY ? styles.currentScreen : styles.navItem}
              onClick={() => navigate(Paths.COMMUNITY)}
            >
              Community
            </li>
          </ul>
        </div>
        <div>
          {currentUser ? (
            <ul className={`${styles.rightNavList} ${styles.userLoggedIn}`}>
              <li>
                <BsChatDots size={30} />
              </li>
              <li>
                <IoIosNotificationsOutline size={30} onClick={() => setNotificationsOpen(!notificationsOpen)} />
                {notificationsOpen && (
                  <div className={`${isAdmin ? styles.notificationsList : styles.regularUser}`}>
                    <ul>
                      {isAdmin
                        ? requests.map((request, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setNotificationsOpen(false);
                                navigate(Paths.REQUEST);
                              }}
                            >
                              <div className={styles.requestDetails}>
                                <ImNotification size={20} />
                                <div>
                                  <p>{request.username}</p>
                                  <p>{request.type}</p>
                                  <p>{request.bookName}</p>
                                </div>
                              </div>
                              <p>{request.date}</p>
                            </li>
                          ))
                        : notifications.map((notification, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setNotificationsOpen(false);
                                navigate(`${Paths.PROFILE}/1`);
                              }}
                            >
                              <ImNotification size={20} />
                              <p>{notification}</p>
                            </li>
                          ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <CgProfile
                  size={30}
                  onClick={event => {
                    setAnchorEl(event.currentTarget);
                  }}
                />
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                  <MenuItem
                    onClick={() => {
                      navigate(`${Paths.PROFILE}/${currentUser.id}`);
                      setAnchorEl(null);
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate(Paths.LIBRARY);
                      setAnchorEl(null);
                    }}
                  >
                    My Library
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <Button onClick={handleLogout} className={`btn ${styles.outlined}`} variant="outlined">
                  Log out
                </Button>
              </li>
            </ul>
          ) : (
            <ul className={styles.rightNavList}>
              <li>
                <Button className={`btn ${styles.outlined}`} variant="outlined" onClick={() => navigate(Paths.SIGN_IN)}>
                  Sign in
                </Button>
              </li>
              <li>
                <Button
                  className={`btn ${styles.contained}`}
                  variant="contained"
                  onClick={() => navigate(Paths.CREATE_ACCOUNT)}
                >
                  Create account
                </Button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
