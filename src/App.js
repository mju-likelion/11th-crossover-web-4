import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';
import NextButton from "./components/NextButton";
import ContentButton from "./components/ContentButton";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Login />
    </ThemeProvider>
  );
}

export default App;
