import { bgImg1, bgImg2, bgImg3 } from 'assets';

import Carousel from 'react-material-ui-carousel';
import { CiSearch } from 'react-icons/ci';
import styles from './Search.module.css';
import { useMediaQuery } from '@mui/material';

const Search = () => {
  const isMobile = useMediaQuery('(max-width:700px)');

  const helperDivs = [
    { imgSrc: bgImg1, alt: 'bgImg1' },
    { imgSrc: bgImg2, alt: 'bgImg2' },
    { imgSrc: bgImg3, alt: 'bgImg3' },
  ];

  return (
    <Carousel className={styles.carousel} autoPlay>
      {helperDivs.map((item, index) => (
        <div className={styles.helperDiv} key={index}>
          <img src={item.imgSrc} alt={item.alt} />
          <div className={styles.searchContainer}>
            <div>
              <h1>Scientific Communication Library</h1>
              <div>
                <input type="text" placeholder="Search for a book..." />
                {!isMobile && <CiSearch size="3%" />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Search;
