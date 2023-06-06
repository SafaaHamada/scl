import { BsFillBookFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { Grow } from '@mui/material';
import styles from './Category.module.css';

const Category = () => {
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
    <div className={styles.categoryContainer}>
      <div className={styles.categoriesSearch}>
        <h1>Categories</h1>
        <div className={styles.wrapper}>
          <input type="text" placeholder="Search for a category..." />
          <CiSearch size={30} className={styles.search} />
        </div>
      </div>
      <Grow in>
        <div>
          {categories.map(category => (
            <div className={styles.categoryBox}>
              <BsFillBookFill size={30} />
              <p>{category.label}</p>
            </div>
          ))}
        </div>
      </Grow>
    </div>
  );
};

export default Category;
