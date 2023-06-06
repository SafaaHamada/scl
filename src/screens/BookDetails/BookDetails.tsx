import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai';
import { Box, Button, Modal, Rating, Stack } from '@mui/material';
import { BsDownload, BsStar } from 'react-icons/bs';
import { profile, systemDesign } from 'assets';
import { useRef, useState } from 'react';

import { CgReadme } from 'react-icons/cg';
import { FiShare } from 'react-icons/fi';
import styles from './BookDetails.module.css';

const BookDetails = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [rateOpen, setRateOpen] = useState<boolean>(false);

  const handleReviewsClick = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDescriptionClick = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.bookDetailsContainer}>
      <Box
        position="relative"
        display="flex"
        justifyContent="space-between"
        bgcolor="white"
        color="var(--dark-blue)"
        p={4}
        top={20}
        borderRadius={2}
        gap={4}
      >
        <Box
          position="absolute"
          right="2%"
          top="4%"
          bgcolor="var(--dark-blue)"
          width={40}
          height={40}
          borderRadius="50%"
          sx={{ cursor: 'pointer' }}
        >
          <AiOutlineHeart size={30} className={styles.heart} color="white" />
        </Box>
        <div>
          <img className={styles.bookImg} src={systemDesign} alt="book" />
          <div>
            <p className={styles.bookName}>System Analysis And Design</p>
            <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={1}>
              <Rating name="read-only" value={5} readOnly />
              <p>(100 ratings)</p>
            </Box>
          </div>
        </div>
        <div>
          <Box display="flex" justifyContent="space-between" gap={4}>
            <ul>
              <li>Author:</li>
              <li>Category:</li>
              <li>Language:</li>
              <li>Publisher:</li>
              <li>Release Date:</li>
              <li>Pages:</li>
              <li>Extension:</li>
            </ul>
            <ul>
              <li>Alan Dennis</li>
              <li>Information System</li>
              <li>English</li>
              <li>John Wiley</li>
              <li>1/2/2023</li>
              <li>100</li>
              <li>PDF</li>
            </ul>
          </Box>
        </div>
        <Stack width="25%" justifyContent="space-evenly">
          <Button
            startIcon={<BsStar />}
            sx={{
              height: 40,
              bgcolor: 'var(--dark-blue)',
              ':hover': {
                bgcolor: 'white',
                color: 'var(--dark-blue)',
              },
            }}
            variant="contained"
            className="btn"
            onClick={() => setRateOpen(true)}
          >
            Rate
          </Button>
          <Button
            startIcon={<BsDownload />}
            sx={{
              height: 40,
              bgcolor: 'var(--dark-blue)',
              ':hover': {
                bgcolor: 'white',
                color: 'var(--dark-blue)',
              },
            }}
            variant="contained"
            className="btn"
          >
            Download
          </Button>
          <Button
            startIcon={<CgReadme />}
            sx={{
              height: 40,
              bgcolor: 'var(--dark-blue)',
              ':hover': {
                bgcolor: 'white',
                color: 'var(--dark-blue)',
              },
            }}
            variant="contained"
            className="btn"
          >
            Read
          </Button>
          <Button
            startIcon={<FiShare />}
            sx={{
              height: 40,
              bgcolor: 'var(--dark-blue)',
              ':hover': {
                bgcolor: 'white',
                color: 'var(--dark-blue)',
              },
            }}
            variant="contained"
            className="btn"
          >
            Share
          </Button>
          <Box display="flex" justifyContent="space-around">
            <Button
              onClick={() => handleReviewsClick()}
              startIcon={<AiOutlineDown />}
              sx={{
                color: 'var(--dark-blue)',
              }}
              className="btn"
            >
              Reviews
            </Button>
            <Button
              onClick={() => handleDescriptionClick()}
              startIcon={<AiOutlineDown />}
              sx={{
                color: 'var(--dark-blue)',
              }}
              className="btn"
            >
              Book Description
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box
        ref={descriptionRef}
        p={2}
        bgcolor="white"
        position="relative"
        mt={5}
        borderRadius={2}
        gap={4}
        color="var(--dark-blue)"
        whiteSpace="break-spaces"
      >
        <p className={styles.bookDescription}>Book Description</p>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nemo quisquam a, minima soluta reiciendis, at,
          magnam sequi unde natus voluptate? Reiciendis, suscipit sunt quae distinctio vero ducimus doloremque laborum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis non quisquam ipsa accusantium
          amet quam quibusdam. Nam, quaerat blanditiis alias cupiditate natus non! Nesciunt harum modi eaque
          perspiciatis maxime! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab repellat maxime perspiciatis
          quod accusamus atque magnam totam! Quas cupiditate rerum quam repellat officia, laborum quos deleniti quidem
          nemo quibusdam facilis!
        </span>
      </Box>
      <Box
        ref={reviewsRef}
        p={2}
        bgcolor="white"
        color="var(--dark-blue)"
        position="relative"
        mt={3}
        borderRadius={2}
        gap={4}
      >
        <p>Reviews</p>
        <Box mt={2} display="flex" gap={3}>
          <img className={styles.profilePic} src={profile} alt="profile" />
          <Box p={2} whiteSpace="break-spaces" borderRadius={2} width="100%" height="100%" bgcolor="var(--light-grey)">
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <p className={styles.username}>Sherif Mohamed</p>
              <Rating name="read-only" value={5} readOnly />
            </Stack>
            <span>Student</span>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis doloribus ipsa unde modi. Adipisci
              voluptatum doloribus commodi, ducimus eos dolorem! Atque obcaecati optio, dignissimos magnam similique at
              recusandae quae nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum molestiae
              animi eum libero pariatur quas placeat molestias provident voluptas omnis ipsam illo, similique saepe
              reprehenderit dignissimos ipsa ab ducimus?
            </p>
          </Box>
        </Box>
        <Box mt={2} display="flex" gap={3}>
          <img className={styles.profilePic} src={profile} alt="profile" />
          <Box p={2} whiteSpace="break-spaces" borderRadius={2} width="100%" height="100%" bgcolor="var(--light-grey)">
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <p className={styles.username}>Nader Osama</p>
              <Rating name="read-only" value={5} readOnly />
            </Stack>
            <span>Student</span>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis doloribus ipsa unde modi. Adipisci
              voluptatum doloribus commodi, ducimus eos dolorem! Atque obcaecati optio, dignissimos magnam similique at
              recusandae quae nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum molestiae
              animi eum libero pariatur quas placeat molestias provident voluptas omnis ipsam illo, similique saepe
              reprehenderit dignissimos ipsa ab ducimus?
            </p>
          </Box>
        </Box>
        <Box mt={2} display="flex" gap={3}>
          <img className={styles.profilePic} src={profile} alt="profile" />
          <Box p={2} whiteSpace="break-spaces" borderRadius={2} width="100%" height="100%" bgcolor="var(--light-grey)">
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <p className={styles.username}>Ali Adel</p>
              <Rating name="read-only" value={5} readOnly />
            </Stack>
            <span>Student</span>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis doloribus ipsa unde modi. Adipisci
              voluptatum doloribus commodi, ducimus eos dolorem! Atque obcaecati optio, dignissimos magnam similique at
              recusandae quae nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum molestiae
              animi eum libero pariatur quas placeat molestias provident voluptas omnis ipsam illo, similique saepe
              reprehenderit dignissimos ipsa ab ducimus?
            </p>
          </Box>
        </Box>
      </Box>
      <Modal open={rateOpen} onClose={() => setRateOpen(false)} className={styles.rateModal}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '30%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
          alignItems="center"
        >
          <p>Rate</p>
          <Rating />
          <br />
          <textarea placeholder="Write a comment..." name="comment" id="comment" />
          <Button
            onClick={() => setRateOpen(false)}
            variant="contained"
            sx={{
              width: '100%',
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
    </div>
  );
};

export default BookDetails;
