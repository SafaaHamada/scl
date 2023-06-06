import { AiOutlineExclamationCircle, AiOutlineMail } from 'react-icons/ai';
import { AppDispatch, RootState } from 'redux/store';
import { Button, Grid, Rating, Stack } from '@mui/material';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import Library from './Library/Library';
import Loading from 'components/Loading/Loading';
import Reviews from './Reviews/Reviews';
import Settings from './Settings/Settings';
import { getUserById } from 'redux/actions/userActions';
import { profile } from 'assets';
import styles from './Profile.module.css';
import { useParams } from 'react-router-dom';

const Profile = () => {
  type Page = 'Reviews' | 'Library' | 'Settings';

  const [selectedPage, setSelectedPage] = useState<Page>('Library');
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handlePageRender = () => {
    switch (selectedPage) {
      case 'Library':
        return <Library />;
      case 'Reviews':
        return <Reviews />;
      case 'Settings':
        return <Settings />;
    }
  };

  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { currentUser, selectedUser, loading } = useSelector((state: RootState) => state.userReducer);
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id!));
    const timeout = setTimeout(() => {
      if (paragraphRef.current?.scrollHeight! > paragraphRef.current?.clientHeight!) {
        setIsOverflow(true);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [dispatch, id]);

  return (
    <div className={styles.profileContainer}>
      <Grid container className={styles.gridContainer}>
        <Grid item md={5} lg={4} display="flex" justifyContent="center" className={styles.leftGrid}>
          <Loading loading={loading} color="white">
            <ul>
              <li>
                <Stack flexDirection="row" sx={{ justifyContent: { xs: 'center', md: 'initial' } }} gap={3}>
                  <img src={selectedUser?.image ?? profile} alt="profile-pic" />
                  <Stack alignItems="center" className={styles.profileName}>
                    <p>{selectedUser?.institutionName || `${selectedUser?.firstName} ${selectedUser?.lastName}`}</p>
                    <p>{selectedUser?.educationalLevel || selectedUser?.jobTitle || selectedUser?.institutionType}</p>
                    <Stack flexDirection="row" gap={1} alignItems="center" className={styles.starRating}>
                      <Rating sx={{ my: 2 }} value={5} readOnly />
                      <span>(100)</span>
                    </Stack>
                    <Stack className={styles.socialIcons} flexDirection="row" justifyContent="center" gap={3}>
                      {selectedUser?.facebook && (
                        <a href={`https://facebook.com/${selectedUser?.facebook}`}>
                          <CiFacebook />
                        </a>
                      )}
                      {selectedUser?.twitter && (
                        <a href={`https://twitter.com/${selectedUser?.twitter}`}>
                          <CiTwitter />
                        </a>
                      )}
                      {selectedUser?.instagram && (
                        <a href={`https://instagram.com/${selectedUser?.instagram}`}>
                          <CiInstagram />
                        </a>
                      )}
                      <a href={`mailto:${selectedUser?.email}`}>
                        <AiOutlineMail />
                      </a>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack className={styles.profileInfo} mt={4} gap={2}>
                  <Stack flexDirection="row" alignItems="center" gap={1}>
                    <GoLocation />
                    <p>
                      {selectedUser?.province}, {selectedUser?.country}
                    </p>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center" gap={1}>
                    <BsTelephone />
                    <p>{selectedUser?.phoneNumber ?? selectedUser?.phoneNumber1}</p>
                  </Stack>
                  {selectedUser?.type !== 'reader' && (
                    <Stack flexDirection="row" gap={1}>
                      <AiOutlineExclamationCircle />
                      <p
                        className={styles.description}
                        ref={paragraphRef}
                        style={{ overflow: 'hidden', height: isExpanded ? '100%' : 20 }}
                      >
                        {selectedUser?.brief}
                      </p>
                      {isOverflow && !isExpanded && (
                        <span>
                          <Button
                            className="btn"
                            sx={{ whiteSpace: 'nowrap', color: 'white', fontSize: '12px', translate: '0 -30%' }}
                            onClick={() => setIsExpanded(true)}
                          >
                            Read More
                          </Button>
                        </span>
                      )}
                      {isOverflow && isExpanded && (
                        <span>
                          <Button
                            className="btn"
                            sx={{ whiteSpace: 'nowrap', color: 'white', fontSize: '12px', translate: '0 -30%' }}
                            onClick={() => setIsExpanded(false)}
                          >
                            Read Less
                          </Button>
                        </span>
                      )}
                    </Stack>
                  )}
                </Stack>
              </li>
              <li
                className={selectedPage === 'Library' ? styles.selectedPage : ''}
                onClick={() => setSelectedPage('Library')}
              >
                Library(50)
              </li>
              <li
                className={selectedPage === 'Reviews' ? styles.selectedPage : ''}
                onClick={() => setSelectedPage('Reviews')}
              >
                Reviews(100)
              </li>
              {currentUser?.id === id && (
                <li
                  className={selectedPage === 'Settings' ? styles.selectedPage : ''}
                  onClick={() => setSelectedPage('Settings')}
                >
                  Settings
                </li>
              )}
            </ul>
          </Loading>
        </Grid>
        <Grid item md={7} lg={8} display="flex" justifyContent="center" className={styles.rightGrid}>
          {handlePageRender()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
