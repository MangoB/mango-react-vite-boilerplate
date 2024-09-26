import { useState } from 'react'
import { useTranslation } from "react-i18next";
import {
  Button,
  Typography,
} from '@mui/material';

import reactLogo from './assets/react.svg'
import muiLogo from '/mui.svg'
import viteLogo from '/vite.svg'

import NavBar from "./components/NavBar";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div className="logo-box">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mui.com/" target="_blank">
          <img src={muiLogo} className="logo mui" alt="MUI logo" />
        </a>
      </div>
      <Typography variant="h2">
        {t("Welcome")}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Vite + React + MUI
      </Typography>
      <div className="card">
        <Button 
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {t("Read the docs")}
      </p>
    </>
  )
}

export default App
