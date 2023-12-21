import './App.css';
import { Route, Router, Routes } from "react-router-dom";
import HeaderComponent from './component/Header/HeaderComponent';
import SignUp from './component/SignUp/SignUp';
import HomePage from './pages/Home/Home';
import CoursePage from './pages/Course/Course';



function App() {
  return (
    <div className="App">
       <HeaderComponent/>
       <Routes>
          <Route index element={<SignUp/>}/>  
          <Route path='/HomePage' element={<HomePage/>}/> 
          <Route path='/CoursePage' element={<CoursePage/>}/> 
          {/* <Route path='/AboutPage' element={<AboutPage/>}/>      
          <Route path='/PricingPage' element={<PricingPage/>}/>  
          <Route path='/ContactPage' element={<ContactPage/>}/>       */}
       </Routes>
    </div>
  );
}

export default App;
