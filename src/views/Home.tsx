import { withRouter } from 'react-router-dom';
import { Container, makeStyles, Typography } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography>Home Page</Typography>
    </Container>
  );
};

export default withRouter(Home);

const useStyles = makeStyles({
  container: {
    marginTop: 50
  }
});
