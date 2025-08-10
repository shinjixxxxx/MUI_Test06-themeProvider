import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import MUI_createTheme from './MUI_createTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={MUI_createTheme}>
      <CssBaseline/>
    CLEAN
    </ThemeProvider>
    </>
  )
}

export default App
