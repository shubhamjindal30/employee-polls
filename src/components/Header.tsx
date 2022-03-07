import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Box, Button, Typography, makeStyles, Avatar } from '@material-ui/core';
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
    route: '/add',
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
      <Box className={classes.tabsSection}>
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
      <Box className={classes.userSection}>
        <Avatar className={classes.avatar} alt={authUser?.name} src={authUser?.avatarURL} />
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
    justifyContent: 'space-between',
    height: 50
  },
  tabsSection: {
    height: '100%'
  },
  button: {
    color: '#fff',
    textTransform: 'none',
    borderRadius: 0,
    height: '100%'
  },
  userSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 5
  }
}));
