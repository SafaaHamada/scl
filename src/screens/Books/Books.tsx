import { Card, CardActions, CardContent, CardMedia, Chip, Grid, Grow, Pagination, Rating, Stack } from '@mui/material';
import { book, book2, book3, book4, book5, book6, book7, book8 } from 'assets';

import { Paths } from 'constants/paths';
import styles from './Books.module.css';
import { useNavigate } from 'react-router-dom';
import { usePagination } from 'hooks/usePagination';
import { useState } from 'react';

const Books = () => {
  const books = [
    { image: book, title: 'Holy Quran', buttonText: 'The Words Of God', rating: 5 },
    {
      image: book2,
      title: 'The Inspirational Reconciliations In Comparing The Hijri Dates With The Frankish And Coptic Years',
      buttonText: 'Muhammad Mukhtar',
      rating: 5,
    },
    { image: book3, title: 'Sahih Bukhari', buttonText: 'Muhammad Bin Ismail', rating: 4 },
    { image: book4, title: '250 Techniques In Psychological', buttonText: 'Lama Fayad', rating: 5 },
    { image: book5, title: 'Quit Worrying And Start Living', buttonText: 'Dale Carnegie', rating: 3 },
    {
      image: book6,
      title: 'The Resurrection Increased In The Guidance Of The Best Of Servants',
      buttonText: 'Ibn Qayyim Al-jawziyya',
      rating: 5,
    },
    { image: book7, title: "Hundred 'donor' For Mastery As Al-fatihah", buttonText: 'Adel Bin Sayed Bin', rating: 4 },
    { image: book8, title: "Doaa Seal The Qur'an", buttonText: 'Abd AlGhazouli', rating: 5 },
  ];
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

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const { selectedItems, currentPage, totalPages, goToPage } = usePagination(books);

  return (
    <div className={styles.booksContainer}>
      <p className={styles.categoryTxt}>Book Categories</p>
      <Grow in>
        <Card className={styles.bookCategories}>
          <div className={styles.wrapper}>
            {categories.map(category => (
              <Chip
                className={`${styles.category} ${selectedCategory === category.label && styles.selectedCategory}`}
                label={category.label}
                onClick={() =>
                  category.label === selectedCategory
                    ? setSelectedCategory(undefined)
                    : setSelectedCategory(category.label)
                }
              />
            ))}
          </div>
        </Card>
      </Grow>
      <Grid container>
        <Grow in>
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
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <CardMedia className={styles.cardMedia} component="img" image={book.image as string} />
                <CardContent className={styles.cardContent}>
                  <p>{book.title as string}</p>
                </CardContent>
                <div>
                  <Rating name="read-only" value={book.rating as number} readOnly />
                  <CardActions>
                    <p className={styles.btn}>{book.buttonText as string}</p>
                  </CardActions>
                </div>
              </Card>
            ))}
          </Grid>
        </Grow>
      </Grid>
      <Stack spacing={2} justifyContent="center" alignItems="center" mt={4} pb={4}>
        <Pagination count={totalPages} page={currentPage} onChange={(e, value) => goToPage(value)} />
      </Stack>
    </div>
  );
};

export default Books;
