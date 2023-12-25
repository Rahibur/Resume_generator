// App.js is responsible for routing all the pages



import './App.css';//Routing css file
import "./responsive.css";
//Routing Navbar file, Home file, Register + Edit file,details file
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import Starter from './components/Starter';
import Connect from './components/Connect';
import { Route, Routes } from "react-router-dom"//Defining Route and Routes react components






function App() {


  return (
    //Defining navbar and Routes
    <>


      <Navbar />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route exact path="/starter" element={<Starter />} />
        <Route  path="/connect" element={<Connect />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/view/:id" element={<Details />} />
        
        
      </Routes>


    </>
  );
}
export default App