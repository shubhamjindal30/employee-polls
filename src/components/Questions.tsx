import { Grid, Typography, makeStyles, Divider, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { Question } from '../store/questions/types';

interface QuestionsProps {
  title: string;
  questions: Question[];
}

const Questions: React.FunctionComponent<QuestionsProps> = ({ title, questions }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.headingContainer} item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid
        className={classes.questionContainer}
        item
        container
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        {questions.map((question) => (
          <Grid key={question.id} className={classes.questionCard} xs={3}>
            <Typography className={classes.authorText} variant="body1">
              {question.author}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {moment(question.timestamp).format('h:mm A | DD/MM/YYYY')}
            </Typography>
            <Divider className={classes.divider} />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => history.push(`/questions/${question.id}`)}
            >
              Show
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Questions;

const useStyles = makeStyles({
  container: {
    border: '1px solid lightgray',
    borderRadius: 5
  },
  headingContainer: {
    padding: 10,
    textAlign: 'center',
    borderBottom: '1px solid lightgray'
  },
  questionContainer: {
    padding: 15
  },
  questionCard: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingTop: 15,
    textAlign: 'center',
    borderRadius: 5,
    border: '1px solid lightgray'
  },
  authorText: {
    fontWeight: 'bold'
  },
  divider: {
    marginTop: 15,
    marginBottom: 10
  }
});
