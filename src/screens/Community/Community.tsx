import { AppDispatch, RootState } from 'redux/store';
import { Card, CardActions, CardContent, CardMedia, Grid, Grow, Pagination, Rating, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { BsFillBookFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import Loading from 'components/Loading/Loading';
import { Paths } from 'constants/paths';
import { getUsers } from 'redux/actions/getUsersAction';
import { profile } from 'assets';
import styles from './Community.module.css';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();
  const { users, loading } = useSelector((state: RootState) => state.getUsersReducer);
  const dispatch: AppDispatch = useDispatch();
  const [page, setPage] = useState(1);
  const communitiesPerPage = 8;
  const pageCount = Math.ceil(users.length / communitiesPerPage);
  const startIndex = (page - 1) * communitiesPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + communitiesPerPage);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.communityContainer}>
      <p className={styles.communityTxt}>Search For Members In The Community</p>
      <Card className={styles.communitySearch}>
        <div className={styles.wrapper}>
          <input type="text" placeholder="Search for a member..." />
          <CiSearch color="white" className={styles.search} size={24} />
        </div>
        <Grid container justifyContent="center">
          <Loading loading={loading}>
            <Grow in>
              <Grid item display="flex" justifyContent="center" flexWrap="wrap" gap={5}>
                {users.length === 0 ? (
                  <p className={styles.emptyMembers}>No members found</p>
                ) : (
                  selectedUsers.map((user, index) => {
                    return (
                      <Card
                        key={index}
                        className={styles.card}
                        onClick={() => navigate(`${Paths.PROFILE}/${user.id}`)}
                        elevation={3}
                        sx={{
                          transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                          '&:hover': {
                            background: '#0f3c5f',
                            color: 'white',
                          },
                        }}
                      >
                        <CardMedia
                          className={styles.cardMedia}
                          component="img"
                          image={(user.image as string) ?? profile}
                        />
                        <CardContent className={styles.cardContent}>
                          <p>{(user.firstName || user.institutionName) as string}</p>
                        </CardContent>
                        <div>
                          <Rating name="read-only" value={user.rating as number} readOnly />
                          <CardActions className={styles.cardActions}>
                            <BsFillBookFill />
                            <span>{user.count as number}</span>
                          </CardActions>
                        </div>
                      </Card>
                    );
                  })
                )}
              </Grid>
            </Grow>
          </Loading>
        </Grid>
        <Stack spacing={2} justifyContent="center" alignItems="center" mt={4} className={styles.paginationContainer}>
          <Pagination count={pageCount} page={page} onChange={(e, value) => setPage(value)} />
        </Stack>
      </Card>
    </div>
  );
};

export default Community;
