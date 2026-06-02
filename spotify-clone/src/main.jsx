import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PlayerContextProvider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
    </HashRouter>
  </React.StrictMode>,
)
