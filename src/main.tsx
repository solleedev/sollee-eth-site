import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import App from './routes/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
