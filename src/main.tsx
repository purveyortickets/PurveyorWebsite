import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { disableInspection } from './utils/disableInspection'

// Disable inspection tools
disableInspection();

createRoot(document.getElementById("root")!).render(<App />);
