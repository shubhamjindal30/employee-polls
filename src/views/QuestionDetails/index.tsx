import { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, Container, Grid, makeStyles, Typography } from '@material-ui/core';

import { PageNotFound } from '..';
import { RootState } from '../../store';
import { Question } from '../../store/questions/types';
import { User } from '../../store/users/types';
import { OptionComponent, Answer } from './Option';

interface IQuestionParams {
  qid: string;
}

const QuestionDetails = () => {
  const classes = useStyles();
  const { qid } = useParams<IQuestionParams>();

  const [question, setQuestion] = useState<Question | null>();
  const [questionAuthor, setQuestionAuthor] = useState<User | null>();
  const [authUserAnswer, setAuthUserAnswer] = useState<Answer>();

  const authUser = useSelector((state: RootState) => state.auth.authUser);
  const users = useSelector((state: RootState) => state.user.users);
  const questions = useSelector((state: RootState) => state.questions.questions);

  useEffect(() => {
    if (qid && questions[qid]) {
      setQuestion(questions[qid]);
      setQuestionAuthor(users[questions[qid].author]);
    }
  }, [qid, questions, users]);

  useEffect(() => {
    if (authUser && question) {
      const answer = authUser.answers[question.id] as Answer;
      if (answer && question[answer].votes.find((x) => x === authUser.id)) {
        setAuthUserAnswer(answer);
      }
    }
  }, [authUser, question]);

  if (!question) return <PageNotFound />

  return (
    <Container className={classes.container} maxWidth="md">
      <Typography variant="h5">Poll by {question?.author}</Typography>
      <Avatar
        className={classes.avatar}
        alt={questionAuthor?.name}
        src={questionAuthor?.avatarURL}
      />
      <Typography className={classes.question} variant="h5">
        Would You Rather
      </Typography>
      <Grid container direction="row" justifyContent="center">
        <OptionComponent
          id="optionOne"
          qid={qid}
          option={question?.optionOne.text || ''}
          answer={authUserAnswer}
          votes={question?.optionOne.votes.length || 0}
          totalUsers={Object.keys(users).length}
        />
        <OptionComponent
          id="optionTwo"
          qid={qid}
          option={question?.optionTwo.text || ''}
          answer={authUserAnswer}
          votes={question?.optionTwo.votes.length || 0}
          totalUsers={Object.keys(users).length}
        />
      </Grid>
    </Container>
  );
};

export default withRouter(QuestionDetails);

const useStyles = makeStyles({
  container: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    marginTop: 30,
    height: 200,
    width: 200
  },
  question: {
    marginTop: 30
  }
});
