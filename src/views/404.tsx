import { withRouter } from 'react-router-dom';
import { Container, makeStyles, Typography } from '@material-ui/core';

const PageNotFound = () => {
  const classes = useStyles();

  return <Container className={classes.container}>
    <Typography variant='h5'>Page not found!</Typography>
  </Container>;
};

export default withRouter(PageNotFound);

const useStyles = makeStyles({
  container: {
    marginTop: 70
  }
});
