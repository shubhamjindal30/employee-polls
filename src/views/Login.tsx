import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Login: React.FunctionComponent = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('user1@test.com');
  const [password] = useState('');

  const handleUsernameChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => setUsername(e.target.value as string);

  const handleLogin = () => {};
  return (
    <div className={classes.container}>
      <Container maxWidth="xs">
        <Paper className={classes.paper}>
          <Grid container direction="column" alignItems="flex-start" justify="center">
            <Typography className={classes.heading} variant="h5">
              Sign in
            </Typography>
            <FormControl className={classes.usernameInput} variant='outlined' fullWidth>
              <InputLabel id="username-select-label">Username</InputLabel>
              <Select
                labelId="username-select-label"
                id="username-select"
                value={username}
                label="Username"
                onChange={handleUsernameChange}
              >
                <MenuItem value='user1@test.com'>user1@test.com</MenuItem>
                <MenuItem value='user2@test.com'>user2@test.com</MenuItem>
              </Select>
            </FormControl>
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
  usernameInput: {
    marginTop: 30
  },
  passwordInput: {
    marginTop: 20
  },
  loginBtn: {
    marginTop: 20
  }
}));
