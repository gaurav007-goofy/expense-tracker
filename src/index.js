import React from 'react';
import ReactDOM from "react-dom/client";
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
);

