import { Box, Button, Stack } from '@mui/material';

import { AiOutlineDown } from 'react-icons/ai';
import styles from './AddBook.module.css';

const AddBook = () => {
  const categories = [
    { label: 'Biology' },
    { label: 'Chemistry' },
    { label: 'Physics' },
    { label: 'Mathematics' },
    { label: 'History' },
    { label: 'Languages' },
    { label: 'Medicine' },
    { label: 'Engineering' },
    { label: 'Management and Leadership' },
    { label: 'Economics' },
    { label: 'Accounting' },
    { label: 'Technology and Computer Science' },
    { label: 'Novels And Literary Stories' },
    { label: 'Human development and self development' },
    { label: 'Islamic Religion' },
    { label: 'History' },
    { label: 'Islamic Fiqh' },
    { label: 'Literature' },
    { label: 'Philosophy And Logic' },
    { label: 'Interpretation Of The Koran' },
    { label: 'The Culture' },
    { label: 'Islamic faith' },
  ];

  return (
    <div className={styles.addBook}>
      <Box className={styles.addBookContainer}>
        <p>Add Book</p>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Box>
            <label htmlFor="book-title">Book Title</label> <br />
            <input placeholder="Enter book title" type="text" />
          </Box>
          <Box>
            <label htmlFor="book-author">Book Author</label> <br />
            <input placeholder="Enter author name" type="text" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3} position="relative">
          <Box>
            <label htmlFor="isbn">ISBN</label> <br />
            <input placeholder="Enter ISBN" type="text" />
          </Box>
          <Box>
            <label htmlFor="release-date">Release Date</label> <br />
            <input type="date" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Box position="relative">
            <label htmlFor="book-language">Book Language</label> <br />
            <select name="bookLanguage" id="bookLanguage">
              <option value="" disabled selected hidden>
                Select a language
              </option>
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
            </select>
            <AiOutlineDown className={styles.dropdownIcon} />
          </Box>
          <Box position="relative">
            <label htmlFor="book-category">Book Category</label> <br />
            <select name="bookCategory" id="bookCategory">
              <option value="" disabled selected hidden>
                Select a category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.label} label={category.label} />
              ))}
            </select>
            <AiOutlineDown className={styles.dropdownIcon} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Box>
            <label htmlFor="book-cover">Book Cover</label> <br />
            <input type="file" accept="image/*" />
          </Box>
          <Box>
            <label htmlFor="book-file">Book File</label> <br />
            <input type="file" accept=".pdf" />
          </Box>
        </Box>
        <Box>
          <label htmlFor="book-description">Book Description</label> <br />
          <textarea name="bookDescription" id="bookDescription" />
        </Box>
      </Box>
      <Box className={styles.contentControl} mt={5}>
        <p>Content Control</p>
        <Stack direction="row" justifyContent="space-between" mb={3}>
          <Box position="relative" width="20vw">
            <label htmlFor="usage-control">Usage Control</label> <br />
            <select name="bookCategory" id="bookCategory">
              <option value="" disabled selected hidden>
                Select control
              </option>
              <option value="readOnly">Read only</option>
              <option value="readAndDownload">Read and download</option>
            </select>
            <AiOutlineDown className={styles.dropdownIcon} />
          </Box>
          <Box width="20vw">
            <Box position="relative" width="20vw">
              <label htmlFor="usage-control">Are you the author?</label> <br />
              <select name="bookCategory" id="bookCategory">
                <option value="" disabled selected hidden>
                  Select yes or no
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <AiOutlineDown className={styles.dropdownIcon} />
            </Box>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box width="20vw">
            <label htmlFor="display-control">Display Control</label>
            <Stack className={styles.displayControl} flexDirection="row" ml={2} mt={1} mb={3} gap="2%">
              <label htmlFor="public">Public</label>
              <input type="radio" name="display" value="public" />
              <label htmlFor="private">Private</label>
              <input type="radio" name="display" value="private" />
            </Stack>
          </Box>
          <Box width="20vw">
            <Stack flexDirection="row" gap="5%">
              <input type="checkbox" />
              <p>Connect members of the institution</p>
            </Stack>
          </Box>
        </Stack>
        <Button
          onClick={() => {}}
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            textTransform: 'initial',
            background: 'var(--dark-blue)',
            color: 'white',
            ':hover': {
              color: 'var(--dark-blue)',
              background: 'white',
            },
          }}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};

export default AddBook;
