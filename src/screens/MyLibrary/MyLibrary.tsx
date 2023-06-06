import { BiSave, BiShare } from 'react-icons/bi';
import { Box, Fade, Stack } from '@mui/material';

import BooksList from './BooksList/BooksList';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import styles from './MyLibrary.module.css';
import { useState } from 'react';

const MyLibrary = () => {
  type Library = 'Downloaded' | 'Saved' | 'Shared';

  const [libraryType, setLibraryType] = useState<Library>('Downloaded');

  return (
    <div className={styles.library}>
      <p>My Library</p>
      <Fade in timeout={{ enter: 500 }}>
        <Stack
          bgcolor="var(--dark-blue)"
          color="white"
          flexDirection="row"
          justifyContent="space-evenly"
          textAlign="center"
          borderRadius={2}
        >
          <Box
            mt={2}
            sx={{
              cursor: 'pointer',
              color: libraryType === 'Downloaded' ? 'var(--light-blue)' : 'white',
              transition: 'color 0.3s ease-in',
            }}
            onClick={() => setLibraryType('Downloaded')}
          >
            <RiDownloadCloud2Line size={32} />
            <p>Downloaded (10)</p>
          </Box>
          <Box
            mt={2}
            sx={{
              cursor: 'pointer',
              color: libraryType === 'Saved' ? 'var(--light-blue)' : 'white',
              transition: 'color 0.3s ease-in',
            }}
            onClick={() => setLibraryType('Saved')}
          >
            <BiSave size={32} />
            <p>Saved (10)</p>
          </Box>
          <Box
            mt={2}
            sx={{
              cursor: 'pointer',
              color: libraryType === 'Shared' ? 'var(--light-blue)' : 'white',
              transition: 'color 0.3s ease-in',
            }}
            onClick={() => setLibraryType('Shared')}
          >
            <BiShare size={32} />
            <p>Shared (10)</p>
          </Box>
        </Stack>
      </Fade>
      <BooksList />
    </div>
  );
};

export default MyLibrary;
