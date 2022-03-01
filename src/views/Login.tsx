import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Login: React.FunctionComponent = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handleLogin = () => {};
  return (
    <div className={classes.container}>
      <Container maxWidth="xs">
        <Paper className={classes.paper}>
          <Grid container direction="column" alignItems="flex-start" justify="center">
            <Typography className={classes.heading} variant="h5">
              Sign in
            </Typography>
            <TextField
              className={classes.emailInput}
              required
              fullWidth
              variant="outlined"
              label="Email"
              value={email}
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              className={classes.passwordInput}
              required
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              disabled
            />
            <Button
              className={classes.loginBtn}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Sign in
            </Button>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(Login);

const useStyles = makeStyles(() => ({
  container: {
    height: '90vh',
    backgroundColor: '#fafafa',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    paddingTop: '10vh'
  },
  paper: {
    padding: 40,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 10
  },
  heading: {
    fontWeight: 'bold'
  },
  emailInput: {
    marginTop: 30
  },
  passwordInput: {
    marginTop: 20
  },
  loginBtn: {
    marginTop: 20
  }
}));
