import { Card, CardActions, CardContent, CardMedia, Grow, Pagination, Rating, Stack } from '@mui/material';
import { book, book2, book3, book4, book5, book6, book7, book8 } from 'assets';

import styles from './BooksList.module.css';
import { useState } from 'react';

const BooksList = () => {
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

  const [page, setPage] = useState(1);

  const booksPerPage = 6;
  const pageCount = Math.ceil(books.length / booksPerPage);
  const startIndex = (page - 1) * booksPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <div className={styles.booksList}>
      <Grow in>
        <Stack flexDirection="row" justifyContent="center" flexWrap="wrap" gap={5}>
          {selectedBooks.map((book, index) => (
            <Card
              key={index}
              className={styles.card}
              elevation={3}
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia className={styles.cardMedia} component="img" image={book.image} />
              <CardContent className={styles.cardContent}>
                <p>{book.title}</p>
              </CardContent>
              <div>
                <Rating name="read-only" value={book.rating} readOnly />
                <CardActions>
                  <p className={styles.btn}>{book.buttonText}</p>
                </CardActions>
              </div>
            </Card>
          ))}
        </Stack>
      </Grow>
      <Stack
        className={styles.paginationContainer}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={8}
        pb={2}
      >
        <Pagination count={pageCount} page={page} onChange={(e, value) => setPage(value)} />
      </Stack>
    </div>
  );
};

export default BooksList;
