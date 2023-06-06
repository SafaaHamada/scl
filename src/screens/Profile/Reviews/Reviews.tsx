import { Box, Rating, Stack } from '@mui/material';

import { BsFillBookFill } from 'react-icons/bs';
import { profile } from 'assets';
import styles from './Reviews.module.css';

const Reviews = () => {
  const reviews = [
    {
      bookTitle: 'How to win friends and influence people',
      author: 'Dale Carnegie',
      rating: 5,
    },
    {
      bookTitle: 'The 7 Habits of Highly Effective People',
      author: 'Stephen Covey',
      rating: 4,
    },
    {
      bookTitle: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      rating: 3,
    },
    {
      bookTitle: 'Superintelligence: Paths, Dangers, Strategies',
      author: 'Nick Bostrom',
      rating: 2,
    },
  ];

  return (
    <div className={styles.reviewsContainer}>
      <p>Reviews</p>
      <Box
        sx={{ mx: { xs: 0, md: 5 }, mb: { xs: 0, md: 2 } }}
        px={5}
        pb={2}
        bgcolor="#0f3c5f"
        color="white"
        borderRadius={4}
      >
        {reviews.map(review => (
          <>
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <BsFillBookFill />
              <p>{review.bookTitle}</p>
            </Stack>
            <Stack
              className={styles.rating}
              sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
              flexDirection="row"
              alignItems="flex-start"
              gap={2}
              bgcolor="white"
              color="#0f3c5f"
              p={2}
              borderRadius={4}
              justifyContent="space-between"
            >
              <Stack flexDirection="row" alignItems="center" gap={2}>
                <img className={styles.profileImg} src={profile} alt="profile" />
                <Stack>
                  <p>{review.author}</p>
                  <p>
                    (My Rating
                    <span>
                      <Rating
                        name="read-only"
                        value={review.rating}
                        sx={{ translate: '0 4px', marginLeft: 1 }}
                        readOnly
                      />
                    </span>
                    )
                  </p>
                </Stack>
              </Stack>
              <p>09 Jan 2023</p>
            </Stack>
          </>
        ))}
      </Box>
    </div>
  );
};

export default Reviews;
