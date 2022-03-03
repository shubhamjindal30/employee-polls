import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Box, Button, Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../store/auth/actions';
import { RootState } from '../store';

const routes = [
  {
    route: '/',
    title: 'Home'
  },
  {
    route: '/leaderboard',
    title: 'Leaderboard'
  },
  {
    route: '/new',
    title: 'New'
  }
];

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const authUser = useSelector((state: RootState) => state.auth.authUser);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <AppBar className={classes.appbar}>
      <Box>
        {routes.map((route) => (
          <Button
            key={route.route}
            className={classes.button}
            style={{
              borderBottom:
                location.pathname === route.route ? '2px solid #fff' : '2px solid transparent'
            }}
            onClick={() => history.push(route.route)}
          >
            {route.title}
          </Button>
        ))}
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography>{authUser?.id}</Typography>
        <Button className={classes.button} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  appbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    color: '#fff',
    textTransform: 'none',
    borderRadius: 0
  }
}));
