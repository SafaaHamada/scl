import { AppDispatch, RootState } from 'redux/store';
import { Button, Grid, Stack, Tooltip } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { deleteUser, updateProfilePic } from 'redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

import ContentManagement from './ContentManagement/ContentManagement';
import InstitutionSettings from './ProfileManagement/InstitutionSettings/InstitutionSettings';
import Loading from 'components/Loading/Loading';
import { Paths } from 'constants/paths';
import Popup from 'components/Modal/Modal';
import PublisherSettings from './ProfileManagement/PublisherSettings/PublisherSettings';
import ReaderSettings from './ProfileManagement/ReaderSettings/ReaderSettings';
import styles from './Settings.module.css';
import { useIsType } from 'hooks/useIsType';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  type Management = 'Profile' | 'Content';

  const [management, setManagement] = useState<Management>('Profile');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isReader = useIsType('reader');
  const isPublisher = useIsType('publisher');
  const isInstitution = useIsType('institution');
  const { currentUser, selectedUser, loading, imageLoading } = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateProfilePic(e, currentUser!));
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const imageUrl = e.target?.result;
        setImageUrl(imageUrl as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderManagement = () => {
    switch (management) {
      case 'Profile':
        return (
          <>
            <input ref={inputRef} hidden id="file-picker" type="file" accept="image/*" onChange={handleImageSelect} />
            <Loading loading={imageLoading}>
              <Tooltip title="Update profile picture">
                <img
                  onClick={() => inputRef.current?.click()}
                  className={styles.uploadPhoto}
                  src={imageUrl ?? selectedUser?.image}
                  alt="profile-pic"
                />
              </Tooltip>
            </Loading>
            {renderManageMentSettings()}
          </>
        );
      case 'Content':
        return <ContentManagement />;
    }
  };

  const renderManageMentSettings = () => {
    if (isReader) {
      return <ReaderSettings />;
    } else if (isPublisher) {
      return <PublisherSettings />;
    } else if (isInstitution) {
      return <InstitutionSettings />;
    }
  };

  const handleDelete = async () => {
    await dispatch(deleteUser(currentUser!));
    navigate(Paths.HOME);
  };

  return (
    <Stack className={styles.settingsContainer}>
      <p>Settings</p>
      <Stack flexDirection="row" justifyContent="space-between" gap="20%">
        <Button
          variant="contained"
          sx={{
            textTransform: 'initial',
            backgroundColor: 'var(--dark-blue)',
            ':hover': {
              backgroundColor: 'var(--dark-blue)',
            },
          }}
          className={management === 'Profile' ? styles.selected : ''}
          onClick={() => setManagement('Profile')}
        >
          Profile Management
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: 'initial',
            backgroundColor: 'var(--dark-blue)',
            ':hover': {
              backgroundColor: 'var(--dark-blue)',
            },
          }}
          className={management === 'Content' ? styles.selected : ''}
          onClick={() => setManagement('Content')}
        >
          Content Management
        </Button>
      </Stack>
      <Grid container justifyContent="center" flexDirection="column" alignItems="center">
        {renderManagement()}
        <Button
          className={styles.deleteBtn}
          variant="contained"
          onClick={() => setDeleteModal(true)}
          sx={{
            textTransform: 'initial',
            backgroundColor: 'red',
            mb: 10,
            ':hover': {
              backgroundColor: 'red',
            },
          }}
        >
          Delete Account
        </Button>
      </Grid>
      <Popup isOpen={deleteModal} handleClose={() => setDeleteModal(false)}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%', color: 'white' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
        >
          <p>Are you sure that you want to delete this category?</p>
          <Stack flexDirection="row" justifyContent="center" gap={2}>
            <Loading loading={loading}>
              <>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  sx={{
                    textTransform: 'initial',
                    background: 'white',
                    width: '100px',
                    color: '#0f3c5f',
                    ':hover': {
                      color: 'white',
                      background: '#5e95cc',
                    },
                  }}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setDeleteModal(false)}
                  variant="contained"
                  sx={{
                    textTransform: 'initial',
                    background: 'white',
                    width: '100px',
                    color: '#0f3c5f',
                    ':hover': {
                      color: 'white',
                      background: '#5e95cc',
                    },
                  }}
                >
                  No
                </Button>
              </>
            </Loading>
          </Stack>
        </Stack>
      </Popup>
    </Stack>
  );
};

export default Settings;
