import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
   ReactDOM.createRoot(rootElement).render(
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   );
}

