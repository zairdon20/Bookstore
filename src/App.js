import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Books from "./components/Books";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/category" element={<Categories/>}/>
      </Routes>
    </>
  );
}

export default App;
