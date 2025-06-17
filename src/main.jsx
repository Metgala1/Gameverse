import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './index.css'
import GameProvider from './components/GameProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>
    <RouterProvider  router={router}/>
    </GameProvider>
  </StrictMode>,
)
