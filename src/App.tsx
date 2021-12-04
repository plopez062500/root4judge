import { Routes, Route } from "react-router";
import Navigation from './components/Navigation';
import Home from './pages/Home'
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";



function App() {

  return (
    <div className="App">
      <Navigation />

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
