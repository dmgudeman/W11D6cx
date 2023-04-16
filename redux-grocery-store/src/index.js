import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { populateProduceAC } from './store/produce';
import { addItemAC} from './store/cart'
const store = configureStore();




function Root() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  );
}
window.store = store;
window.populateProduceAC = populateProduceAC;
window.addItemAC = addItemAC;


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);