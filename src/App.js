import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';
import NextButton from "./components/NextButton";
import ContentButton from "./components/ContentButton";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
