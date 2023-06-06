import './index.css';

import { persistor, store } from 'redux/store';

import App from './App';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
