import { createContext, useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const ColorModeContext = createContext({
  colorMode: {},
  theme: {},
})

const ColorModeProvider = ({ children }) => {
  const storedMode = localStorage.getItem('mode')
  const [mode, setMode] = useState(storedMode ?? 'light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          localStorage.setItem('mode', prevMode === 'light' ? 'dark' : 'light')
          return prevMode === 'light' ? 'dark' : 'light'
        })
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export { ColorModeContext, ColorModeProvider }
