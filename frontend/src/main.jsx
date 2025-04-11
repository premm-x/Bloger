import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './config/userContext.jsx'
import { PostProvider } from './config/postContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PostProvider>
          <App/>
        </PostProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)