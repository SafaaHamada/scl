import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Modal,
  Pagination,
  Rating,
  Stack,
  Tooltip,
} from '@mui/material';
import { book, book2, book3, book4, book5, book6, book7, book8 } from 'assets';

import { AiOutlinePlus } from 'react-icons/ai';
import { Paths } from 'constants/paths';
import styles from './ContentManagement.module.css';
import { useNavigate } from 'react-router-dom';
import { usePagination } from 'hooks/usePagination';
import { useState } from 'react';

const ContentManagement = () => {
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

  const books = [
    { image: book, title: 'Holy Quran', author: 'The Words Of God', rating: 5 },
    {
      image: book2,
      title: 'The Inspirational Reconciliations In Comparing The Hijri Dates With The Frankish And Coptic Years',
      author: 'Muhammad Mukhtar',
      rating: 5,
    },
    { image: book3, title: 'Sahih Bukhari', author: 'Muhammad Bin Ismail', rating: 4 },
    { image: book4, title: '250 Techniques In Psychological', author: 'Lama Fayad', rating: 5 },
    { image: book5, title: 'Quit Worrying And Start Living', author: 'Dale Carnegie', rating: 3 },
    {
      image: book6,
      title: 'The Resurrection Increased In The Guidance Of The Best Of Servants',
      author: 'Ibn Qayyim Al-jawziyya',
      rating: 5,
    },
    { image: book7, title: "Hundred 'donor' For Mastery As Al-fatihah", author: 'Adel Bin Sayed Bin', rating: 4 },
    { image: book8, title: "Doaa Seal The Qur'an", author: 'Abd AlGhazouli', rating: 5 },

    { image: book7, title: "Hundred 'donor' For Mastery As Al-fatihah", author: 'Adel Bin Sayed Bin', rating: 4 },
    { image: book8, title: "Doaa Seal The Qur'an", author: 'Abd AlGhazouli', rating: 5 },
  ];

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [addCategoryOpen, setAddCategoryOpen] = useState<boolean>(false);
  const [editCategoryOpen, setEditCategoryOpen] = useState<boolean>(false);
  const [deleteCategoryOpen, setDeleteCategoryOpen] = useState<boolean>(false);
  const [editBookOpen, setEditBookOpen] = useState<boolean>(false);
  const [deleteBookOpen, setDeleteBookOpen] = useState<boolean>(false);
  const { selectedItems, currentPage, totalPages, goToPage } = usePagination(books);

  return (
    <div className={styles.contentContainer}>
      <Card className={styles.libraryCategories}>
        <p className={styles.contentTxt}>All Categories</p>
        <div className={styles.wrapper}>
          <Tooltip title="Add category">
            <Chip
              className={styles.category}
              label="+"
              sx={{ cursor: 'pointer' }}
              onClick={() => setAddCategoryOpen(true)}
            />
          </Tooltip>
          {categories.map(category => (
            <Box position="relative" className={styles.categoryBtns}>
              <Stack flexDirection="row">
                <button onClick={() => setEditCategoryOpen(true)}>Edit</button>
                <button onClick={() => setDeleteCategoryOpen(true)}>Delete</button>
              </Stack>
              <Chip
                sx={{ width: 200 }}
                className={`${styles.category} ${selectedCategory === category.label && styles.selectedCategory}`}
                label={category.label}
                onClick={() =>
                  category.label === selectedCategory
                    ? setSelectedCategory(undefined)
                    : setSelectedCategory(category.label)
                }
              />
            </Box>
          ))}
        </div>
      </Card>
      <Box bgcolor="var(--dark-blue)" color="white" borderRadius={4} my={4} py={1}>
        <p className={styles.contentTxt}>All Content</p>
        <Grid container justifyContent="center" mt={2}>
          <Grid item display="flex" justifyContent="center" flexWrap="wrap" gap={5}>
            {selectedItems.map((book, index) => (
              <Card
                key={index}
                className={styles.card}
                elevation={3}
                onClick={() => navigate(`${Paths.BOOK_DETAILS}/1`)}
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia className={styles.cardMedia} component="img" image={book.image as string} />
                <CardContent className={styles.cardContent}>
                  <p>{book.title as string}</p>
                </CardContent>
                <div>
                  <Rating name="read-only" value={book.rating as number} readOnly />
                  <CardActions sx={{ flexDirection: 'column' }}>
                    <p className={styles.author}>{book.author as string}</p>
                    <Stack flexDirection="row">
                      <Button sx={{ textTransform: 'initial', color: 'green' }} onClick={() => setEditBookOpen(true)}>
                        Edit
                      </Button>
                      <Button sx={{ textTransform: 'initial', color: 'red' }} onClick={() => setDeleteBookOpen(true)}>
                        Delete
                      </Button>
                    </Stack>
                  </CardActions>
                </div>
              </Card>
            ))}
            <Card
              elevation={3}
              onClick={() => {}}
              sx={{
                padding: '10px 8px',
                width: 240,
                mt: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <AiOutlinePlus />
            </Card>
          </Grid>
          <Stack spacing={2} justifyContent="center" alignItems="center" mb={4}>
            <Pagination
              count={totalPages}
              page={currentPage}
              sx={{ color: 'white' }}
              onChange={(e, value) => goToPage(value)}
            />
          </Stack>
        </Grid>
      </Box>
      <Box bgcolor="var(--dark-blue)" color="white" borderRadius={4} my={4} py={1}>
        <p className={styles.contentTxt}>Private Content</p>
        <Grid container justifyContent="center" mt={2}>
          <Grid item display="flex" justifyContent="center" flexWrap="wrap" gap={5}>
            {selectedItems.map((book, index) => (
              <Card
                key={index}
                className={styles.card}
                elevation={3}
                onClick={() => navigate(`${Paths.BOOK_DETAILS}/1`)}
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia className={styles.cardMedia} component="img" image={book.image as string} />
                <CardContent className={styles.cardContent}>
                  <p>{book.title as string}</p>
                </CardContent>
                <div>
                  <Rating name="read-only" value={book.rating as number} readOnly />
                  <CardActions sx={{ flexDirection: 'column' }}>
                    <p className={styles.author}>{book.author as string}</p>
                    <Stack flexDirection="row">
                      <Button sx={{ textTransform: 'initial', color: 'green' }} onClick={() => setEditBookOpen(true)}>
                        Edit
                      </Button>
                      <Button sx={{ textTransform: 'initial', color: 'red' }} onClick={() => setDeleteBookOpen(true)}>
                        Delete
                      </Button>
                    </Stack>
                  </CardActions>
                </div>
              </Card>
            ))}
            <Card
              elevation={3}
              onClick={() => {}}
              sx={{
                padding: '10px 8px',
                width: 240,
                mt: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <AiOutlinePlus />
            </Card>
          </Grid>
          <Stack spacing={2} justifyContent="center" alignItems="center" mb={4}>
            <Pagination
              count={totalPages}
              page={currentPage}
              sx={{ color: 'white' }}
              onChange={(e, value) => goToPage(value)}
            />
          </Stack>
        </Grid>
      </Box>
      <Modal open={addCategoryOpen} onClose={() => setAddCategoryOpen(false)} className={styles.categoryModal}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
        >
          <p>Add New Category</p>
          <input type="text" /> <br />
          <Button
            onClick={() => setAddCategoryOpen(false)}
            variant="contained"
            sx={{
              textTransform: 'initial',
              background: 'white',
              color: '#0f3c5f',
              ':hover': {
                color: 'white',
                background: '#5e95cc',
              },
            }}
          >
            Save
          </Button>
        </Stack>
      </Modal>
      <Modal open={editCategoryOpen} onClose={() => setEditCategoryOpen(false)} className={styles.categoryModal}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
        >
          <p>Edit Category</p>
          <input type="text" /> <br />
          <Button
            onClick={() => setEditCategoryOpen(false)}
            variant="contained"
            sx={{
              textTransform: 'initial',
              background: 'white',
              color: '#0f3c5f',
              ':hover': {
                color: 'white',
                background: '#5e95cc',
              },
            }}
          >
            Save
          </Button>
        </Stack>
      </Modal>
      <Modal open={deleteCategoryOpen} onClose={() => setDeleteCategoryOpen(false)} className={styles.categoryModal}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
        >
          <p>Are you sure that you want to delete this category?</p>
          <Stack flexDirection="row" justifyContent="center" gap={2}>
            <Button
              onClick={() => setDeleteCategoryOpen(false)}
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
              onClick={() => setDeleteCategoryOpen(false)}
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
          </Stack>
        </Stack>
      </Modal>
      <Modal open={editBookOpen} onClose={() => setEditBookOpen(false)} className={styles.categoryModal}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
        >
          <p>Edit Book</p>
          <input type="text" /> <br />
          <Button
            onClick={() => setEditBookOpen(false)}
            variant="contained"
            sx={{
              textTransform: 'initial',
              background: 'white',
              color: '#0f3c5f',
              ':hover': {
                color: 'white',
                background: '#5e95cc',
              },
            }}
          >
            Save
          </Button>
        </Stack>
      </Modal>
      <Modal open={deleteBookOpen} onClose={() => setDeleteBookOpen(false)} className={styles.categoryModal}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
        >
          <p>Are you sure that you want to delete this book?</p>
          <Stack flexDirection="row" justifyContent="center" gap={2}>
            <Button
              onClick={() => setDeleteBookOpen(false)}
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
              onClick={() => setDeleteBookOpen(false)}
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
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

export default ContentManagement;
