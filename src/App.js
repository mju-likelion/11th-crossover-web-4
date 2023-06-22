import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {Theme} from './styles/Theme.js';
import Header from './components/Header';
import PostList from './pages/Post/PostList';
import {Route, Routes} from 'react-router-dom';
import WritePost from './pages/WritePost/WritePost';
import SignUp from './pages/Join/SignUp';
import Content from './pages/Content/Content';
import Login from './pages/Login/Login';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<PostList/>}></Route>
        <Route path="/:id" element={<Content/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/join" element={<SignUp/>}></Route>
        <Route path="/write" element={<WritePost/>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
