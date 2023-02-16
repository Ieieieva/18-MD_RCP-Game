import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Board } from './pages/Board/Board';
import { Scores } from './pages/Scores/Scores';
import { NoPage } from './pages/NoPage/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='board' element={<Board />} />
          <Route path='scores' element={<Scores />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
