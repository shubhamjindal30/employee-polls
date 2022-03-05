import { Grid, Typography, Button, makeStyles } from '@material-ui/core';

export type Option = 'optionOne' | 'optionTwo';
export type Answer = Option | undefined;

interface OptionProps {
  id: Option;
  option: string;
  answer: Answer;
  votes: number;
  totalUsers: number;
}

export const OptionComponent = ({ id, option, answer, votes, totalUsers }: OptionProps) => {
  const classes = useStyles();

  const isSameAnswer = answer ? (id === answer ? true : false) : null;

  return (
    <Grid className={classes.option} item xs={12} sm={5}>
      <Typography className={classes.optionText} variant="body2">
        {option}
      </Typography>
      <Button
        className={classes.clickBtn}
        style={{ visibility: isSameAnswer === false ? 'hidden' : 'visible' }}
        disabled={isSameAnswer || false}
        variant="contained"
        color="primary"
        fullWidth
      >
        {isSameAnswer ? 'You sellected this option' : 'Click'}
      </Button>
      {answer && totalUsers && (
        <Typography>
          {votes} vote{votes !== 1 && 's'} {votes !== 0 && `(${(votes / totalUsers) * 100}%)`}
        </Typography>
      )}
    </Grid>
  );
};

const useStyles = makeStyles({
option: {
    margin: 10,
    width: '40%',
    textAlign: 'center'
  },
  optionText: {
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: '1px solid lightgrey'
  },
  clickBtn: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: 5
  }
});
