import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { User } from '../store/users/types';

const Login: React.FunctionComponent = () => {
  const classes = useStyles();
  const users = useSelector((state: RootState) => state.user.users);

  const [selectedUser, setSelectedUser] = useState<User | undefined>(users[0]);

  useEffect(() => {
    setSelectedUser(users[0]);
  }, [users]);

  const handleUserChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => setSelectedUser(users.find((x) => x.id === (e.target.value as string)));

  const handleLogin = () => {};
  return (
    <div className={classes.container}>
      <Container maxWidth="xs">
        <Paper className={classes.paper}>
          <Grid container direction="column" alignItems="flex-start" justifyContent="center">
            <Typography className={classes.heading} variant="h5">
              Sign in
            </Typography>
            <FormControl className={classes.usernameInput} variant="outlined" fullWidth>
              <InputLabel id="username-select-label">User</InputLabel>
              <Select
                labelId="username-select-label"
                id="username-select"
                value={selectedUser?.id || ''}
                label="Username"
                onChange={handleUserChange}
              >
                {users &&
                  users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              className={classes.passwordInput}
              required
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={selectedUser?.password || ''}
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
