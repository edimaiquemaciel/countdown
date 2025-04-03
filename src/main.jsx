import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home.jsx";
import CountDown from "./routes/CountDown.jsx";
import { CountdownProvider } from './context/CountdownContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <CountDown />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
      <RouterProvider router={router}></RouterProvider>
    </CountdownProvider>
  </StrictMode>,
)
