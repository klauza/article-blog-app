import React from 'react';

// utils
import usePersistedState from './utils/usePersistedState';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// css
import { ThemeProvider } from 'styled-components'; 
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

// routes index
import Main from './views'

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
