import { institute, publisher, reader } from 'assets';

import { Grid } from '@mui/material';
import styles from './Info.module.css';

const Info = () => {
  return (
    <section className={styles.infoContainer}>
      <Grid className="grid" container gap={10} justifyContent="center">
        <Grid item textAlign="center" xs={12} sm={9} md={6} lg={3}>
          <img src={reader} alt="reader" />
          <p>Readers</p>
          <h5>
            Researchers, including students, who aim to access specific scientific content. They are anyone who benefits
            from the dissemination of various content by other users. The library is open for them to search and
            interact with different scientific sections, books, as well as other users such as specialists and various
            institutions, if they belong to them, and to communicate with them. Note that if you are a student, you need
            to create an account with your university or institute to be able to benefit from their specific content.
          </h5>
        </Grid>
        <Grid item textAlign="center" xs={12} sm={9} md={6} lg={3}>
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
        <Grid item textAlign="center" xs={12} sm={9} md={6} lg={3}>
          <img src={institute} alt="institute" />
          <p>Educational institutions</p>
          <h5>
            It refers to all institutions that provide various educational services such as public libraries,
            universities, institutes, and schools. The library allows them complete freedom to add their own sections
            and their contents, including different books and articles, as well as the freedom to control the
            permissions for displaying and interacting with their own contents. If an educational institution has
            specific members such as university and institute students, the library can link their students to their own
            page and allocate content that is exclusive to them.
          </h5>
        </Grid>
      </Grid>
    </section>
  );
};

export default Info;
