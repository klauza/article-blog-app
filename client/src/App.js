import React from 'react';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// routes index
import Main from './views'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
