import { Button, Grow, Modal, Stack } from '@mui/material';

import { ImNotification } from 'react-icons/im';
import styles from './Request.module.css';
import { useState } from 'react';

const Requests = () => {
  const [rejected, setRejected] = useState<boolean>(false);

  return (
    <div className={styles.request}>
      <div className={styles.requestTitle}>
        <ImNotification />
        <div>
          <p>UserName</p>
          <p>UserType</p>
        </div>
      </div>
      <Grow in>
        <div className={styles.requestContainer}>
          <p>Delete book request</p>
          <div className={styles.bookDetailsContainer}>
            <div className={styles.bookDetails}>
              <ul>
                <li>Book Name:</li>
                <li>Book Cover:</li>
                <li>Book File:</li>
                <li>Release Date:</li>
              </ul>
              <ul>
                <li>Name</li>
                <li>Cover</li>
                <li>File</li>
                <li>20/5/2023</li>
              </ul>
            </div>
            <div className={styles.bookDetails}>
              <ul>
                <li>Book Author:</li>
                <li>Is Author:</li>
                <li>Book Category:</li>
              </ul>
              <ul>
                <li>Author Name</li>
                <li>Yes</li>
                <li>Educational</li>
              </ul>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              sx={{
                bgcolor: 'green',
                ':hover': {
                  bgcolor: 'green',
                },
              }}
              variant="contained"
              className="btn"
            >
              Accept
            </Button>
            <Button
              sx={{
                bgcolor: 'red',
                ':hover': {
                  bgcolor: 'red',
                },
              }}
              variant="contained"
              className="btn"
              onClick={() => setRejected(true)}
            >
              Reject
            </Button>
          </div>
        </div>
      </Grow>
      <Modal className={styles.modalContainer} open={rejected} onClose={() => setRejected(false)}>
        <Stack
          sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%', width: '40%' }}
          bgcolor="#0f3c5f"
          p={2}
          borderRadius={2}
          alignItems="center"
        >
          <p>Please enter the reason for rejection, Explaining the reason for refusal</p>
          <textarea name="reason" id="reason" />
          <Button
            sx={{
              bgcolor: '#5e95cc',
              ':hover': {
                bgcolor: '#0f3c5f',
              },
            }}
            variant="contained"
            className="btn"
            onClick={() => setRejected(false)}
          >
            Save
          </Button>
        </Stack>
      </Modal>
    </div>
  );
};

export default Requests;
