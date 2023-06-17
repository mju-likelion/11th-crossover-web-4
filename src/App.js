import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';
import SignInputBasic from './components/SignInputBasic';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <SignInputBasic></SignInputBasic>
    </ThemeProvider>
  );
}

export default App;
