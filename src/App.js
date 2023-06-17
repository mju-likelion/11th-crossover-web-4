import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle>
        <></>
      </GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
