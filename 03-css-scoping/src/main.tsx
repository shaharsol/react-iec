import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <p>this is a pragraph in main</p>
    <App />
    <App />
    <App />
  </StrictMode>,
)
