import { institute, logo, publisher, reader } from 'assets';

import { Fade } from '@mui/material';
import Institution from './Institution/Institution';
import Publisher from './Publisher/Publisher';
import Reader from './Reader/Reader';
import styles from './CreateAccount.module.css';
import { useState } from 'react';

const CreateAccount = () => {
  type User = 'Reader' | 'Publisher' | 'Educational Institute';

  const [userType, setUserType] = useState<User>();

  switch (userType) {
    case 'Reader':
      return <Reader onReturn={() => setUserType(undefined)} />;
    case 'Publisher':
      return <Publisher onReturn={() => setUserType(undefined)} />;
    case 'Educational Institute':
      return <Institution onReturn={() => setUserType(undefined)} />;
    default:
      return (
        <div className={styles.createAccountContainer}>
          <Fade in timeout={{ enter: 1000 }}>
            <div className={styles.createAccountCard}>
              <div>
                <img src={logo} alt="logo" />
                <p>Select Type Of Account</p>
              </div>
              <div className={styles.imgContainer}>
                <div className={styles.item} onClick={() => setUserType('Reader')}>
                  <img src={reader} alt="reader" />
                  <p>Reader</p>
                </div>
                <div className={styles.item}>
                  <img src={publisher} alt="publisher" onClick={() => setUserType('Publisher')} />
                  <p>Publisher</p>
                </div>
                <div className={styles.item} onClick={() => setUserType('Educational Institute')}>
                  <img src={institute} alt="institute" />
                  <p>Educational Institute</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      );
  }
};

export default CreateAccount;
