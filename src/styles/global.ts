import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

:focus {
  outline: 0px;
  box-shadow: 0 0 0 2px ${(props => props.theme['green-500'])}
}

body {
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['gray-100']};
  webkit-font-smoothing: antialised;
}

body, input, textarea, button {
  font: 400 1rem Roboto, sans-serif;
}
`