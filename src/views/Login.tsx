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
import { useLocation, useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { User } from '../store/users/types';
import { signIn } from '../store/auth/actions';

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  
  const userObj = useSelector((state: RootState) => state.user.users);

  const [users, setUsers] = useState<User[]>(Object.values(userObj));
  const [selectedUser, setSelectedUser] = useState<User | undefined>(Object.values(userObj)[0]);

  useEffect(() => {
    setUsers(Object.values(userObj));
    setSelectedUser(Object.values(userObj)[0]);
  }, [userObj]);

  const handleUserChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => setSelectedUser(userObj[e.target.value as string]);

  const handleLogin = () => {
    if (selectedUser) {
      const { id: username, password } = selectedUser;
      dispatch(signIn({ username, password }));
      history.replace(location.pathname);
    }
  };
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
