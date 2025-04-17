import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google' 
import './index.css'
import App from './App.jsx'
import Promptbox from './Promptbox.jsx'
import History from './history.jsx'
import './promptbox.css'
import './history.css'
import Header from './header.jsx'
import './header.css'
import ThreeCanvas from './ThreeCanvas.jsx'
import FloatingBot from './FloatingBot.jsx'
import Starfield from './Starfield.jsx'
import Maintext from './Maintext.jsx'
// replace with your actual client ID from Google Console
const clientId = "YOUR_GOOGLE_CLIENT_ID";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Header />
      <Promptbox />
      <Maintext />`
      <FloatingBot />
      <Starfield />
      <History />
    </GoogleOAuthProvider>
  </StrictMode>
)
