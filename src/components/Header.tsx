import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Box, Button, Typography, makeStyles } from '@material-ui/core';

const routes = [
  {
    route: '/home',
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
  const history = useHistory();
  const location = useLocation();

  const [selectedRoute, setSelectedRoute] = useState(location.pathname);

  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location]);

  return (
    <AppBar className={classes.appbar}>
      <Box>
        {routes.map((route) => (
          <Button
            key={route.route}
            className={classes.button}
            style={{ borderBottom: selectedRoute === route.route ? '2px solid #fff' : '' }}
            onClick={() => history.push(route.route)}
          >
            {route.title}
          </Button>
        ))}
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography>User 1</Typography>
        <Button className={classes.button}>Logout</Button>
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
