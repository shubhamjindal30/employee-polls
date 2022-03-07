import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';

import { RootState } from '../store';
import { StyledTableCell } from '../components';

const Leaderboard = () => {
  const classes = useStyles();

  const users = useSelector((state: RootState) => state.user.users);

  return (
    <Container className={classes.container} maxWidth="md">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell align="center">Answered</StyledTableCell>
              <StyledTableCell align="center">Created</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(users)
              .sort(
                (x, y) =>
                  y.questions.length +
                  Object.keys(y.answers).length -
                  (x.questions.length + Object.keys(x.answers).length)
              )
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell className={classes.userColumn}>
                    <Avatar className={classes.avatar} alt={user.name} src={user.avatarURL} />
                    {user.name}
                  </TableCell>
                  <TableCell align="center">{Object.keys(user.answers).length}</TableCell>
                  <TableCell align="center">{user.questions.length}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default withRouter(Leaderboard);

const useStyles = makeStyles({
  container: {
    marginTop: 70
  },
  userColumn: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 20
  }
});
