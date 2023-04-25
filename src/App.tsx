import styled, { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

const Hello = styled.div``

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Hello>HEllo Word</Hello>
      <GlobalStyles />
    </ThemeProvider>
  )
}
