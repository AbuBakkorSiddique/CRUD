
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";
import Homepage from './Pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/read' element={<ReadPage />} />
        <Route exact path='/create' element={<CreatePage />} />
   
        <Route exact path='/update' element={<UpdatePage/>} />
        <Route exact path='/update/:id' element={<UpdatePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

