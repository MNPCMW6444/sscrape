import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Popup from './popup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Popup />
    </BrowserRouter>
  </StrictMode>,
);
