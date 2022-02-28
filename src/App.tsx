import { ThemeProvider } from '@material-ui/core';

import { theme } from './constants/theme';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
