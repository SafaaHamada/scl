import { about1, about2, about3, institute, logo, publisher, reader } from 'assets';

import Carousel from 'react-material-ui-carousel';
import { Grid } from '@mui/material';
import styles from './About.module.css';

const About = () => {
  const carouselItems = [
    { img: about1, alt: 'about1' },
    { img: about2, alt: 'about2' },
    { img: about3, alt: 'about3' },
  ];
  return (
    <div className={styles.aboutContainer}>
      <Carousel className={styles.carousel} autoPlay>
        {carouselItems.map(item => (
          <div className={styles.helperDiv}>
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </Carousel>
      <div className={styles.textWrapper}>
        <img src={logo} alt="logo" />
        <span>Knowledge is a right for everyone and the foundation of the success of society.</span>
        <p className={styles.desc}>
          It is a knowledge society that provides communication among different individuals around the world and sharing
          different knowledge among them, which helps every researcher or student to have quick and flexible access to
          various sources of information and benefit from them. It also helps various educational institutions and
          experts to share their scientific contents, articles and spread their knowledge.
        </p>
        <p className={styles.desc}>SCL includes different types of users, each with different needs and permissions.</p>
        <Grid className={styles.gridContainer} mt={30} container gap={10} justifyContent="center">
          <Grid className={styles.grid} item textAlign="center" xs={12} sm={9} md={6} lg={3}>
            <img src={reader} alt="reader" />
            <p>Readers</p>
            <h5>
              Researchers, including students, who aim to access specific scientific content. They are anyone who
              benefits from the dissemination of various content by other users. The library is open for them to search
              and interact with different scientific sections, books, as well as other users such as specialists and
              various institutions, if they belong to them, and to communicate with them. Note that if you are a
              student, you need to create an account with your university or institute to be able to benefit from their
              specific content.
            </h5>
          </Grid>
          <Grid className={styles.grid} item textAlign="center" xs={12} sm={9} md={6} lg={3}>
            <img src={publisher} alt="publisher" />
            <p>Publishers</p>
            <h5>
              It is intended for every content creator, such as university professors, teachers, and specialists in
              various fields. The library provides them with special features, such as dividing their page into optional
              sections, publishing their contents of books and articles, as well as the ability to advertise their books
              easily, in addition to other features of seeing the interactions of their content, and controlling the
              powers to interact with each content.
            </h5>
          </Grid>
          <Grid className={styles.grid} item textAlign="center" xs={12} sm={9} md={6} lg={3}>
            <img src={institute} alt="institute" />
            <p>Educational institutions</p>
            <h5>
              It refers to all institutions that provide various educational services such as public libraries,
              universities, institutes, and schools. The library allows them complete freedom to add their own sections
              and their contents, including different books and articles, as well as the freedom to control the
              permissions for displaying and interacting with their own contents. If an educational institution has
              specific members such as university and institute students, the library can link their students to their
              own page and allocate content that is exclusive to them.
            </h5>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
