import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceworker from './serviceWorker';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
