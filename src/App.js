import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';
import NextButton from "./components/NextButton";
import ContentButton from "./components/ContentButton";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
          <NextButton isFull="true">로그인</NextButton>
      <ContentButton isWritten="true" isActive="false">작성하기</ContentButton>
    </ThemeProvider>
  );
}

export default App;
