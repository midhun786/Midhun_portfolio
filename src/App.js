import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './Component/Page';
import "bootstrap/dist/css/bootstrap.min.css"
import Dock from './Component/Dock';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}>
        <Route index element={<Dock/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
