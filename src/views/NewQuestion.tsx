import { ChangeEvent, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';

import { saveQuestion } from '../store/questions/actions';

const NewPoll = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');

  const handleFirstChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setFirstOption(e.target.value);

  const handleSecondChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setSecondOption(e.target.value);

  const handleSubmit = () => {
    const optionOneText = firstOption.trim();
    const optionTwoText = secondOption.trim();

    if (!optionOneText) {
      window.alert('First option cannot be empty!');
      return;
    }

    if (!optionTwoText) {
      window.alert('Second option cannot be empty!');
      return;
    }

    dispatch(saveQuestion({ optionOneText, optionTwoText }));

    history.push('/');
  };

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h5">Would You Rather</Typography>
      <Typography variant="body1" color="textSecondary">
        Create Your Own Poll
      </Typography>
      <Typography className={classes.firstOption} variant="body1">
        First Option
      </Typography>
      <TextField
        className={classes.textField}
        fullWidth
        variant="outlined"
        placeholder="Option One"
        value={firstOption}
        onChange={handleFirstChange}
      />
      <Typography className={classes.secondOption} variant="body1">
        Second Option
      </Typography>
      <TextField
        className={classes.textField}
        fullWidth
        variant="outlined"
        placeholder="Option Two"
        value={secondOption}
        onChange={handleSecondChange}
      />
      <Button
        className={classes.submitBtn}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default withRouter(NewPoll);

const useStyles = makeStyles({
  container: {
    marginTop: 60,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstOption: {
    marginTop: 20
  },
  textField: {
    marginTop: 10
  },
  secondOption: {
    marginTop: 10
  },
  submitBtn: {
    marginTop: 20
  }
});
