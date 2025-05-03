import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Habilita modo de produção (útil em algumas análises de performance)
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

