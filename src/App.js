
import Logout from "./components/Logout";
import { Route,Routes } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    
          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          </Routes>
  );
}

export default App;
