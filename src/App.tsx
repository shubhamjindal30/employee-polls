import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import { theme } from './constants/theme';
import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
