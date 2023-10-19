import { createContext, useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const ColorModeContext = createContext({
  colorMode: {},
  theme: {},
})

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
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
