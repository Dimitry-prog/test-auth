import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import store from "./store/store";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
