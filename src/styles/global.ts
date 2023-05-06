import * as styled from 'styled-components'
import { scrollbarDark } from './schrollbars'

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }

  body {
    background-color: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  body {
    ${scrollbarDark}
  }
`
