import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, makeStyles } from '@material-ui/core';

import { Questions } from '../components';
import { RootState } from '../store';
import { Question } from '../store/questions/types';

const Home = () => {
  const classes = useStyles();

  const authUser = useSelector((state: RootState) => state.auth.authUser);
  const questions = useSelector((state: RootState) => state.questions.questions);

  const [answered, setAnswered] = useState<Question[]>([]);
  const [unAnswered, setUnAnswered] = useState<Question[]>([]);

  useEffect(() => {
    if (authUser) {
      const ans: Question[] = [];
      const unAns: Question[] = [];
      Object.values(questions).map((question) =>
        authUser.answers[question.id] ? ans.push(question) : unAns.push(question)
      );
      setAnswered(ans);
      setUnAnswered(unAns);
    }
  }, [authUser, questions]);

  return (
    <Container className={classes.container} maxWidth="md">
      <Questions title="New Questions" questions={Object.values(unAnswered)} />
      <Questions title="Done" questions={Object.values(answered)} />
    </Container>
  );
};

export default withRouter(Home);

const useStyles = makeStyles({
  container: {
    marginTop: 70
  }
});
