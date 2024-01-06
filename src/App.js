import './App.css';
import { Route, Router, Routes } from "react-router-dom";
import HeaderComponent from './component/Header/HeaderComponent';
import SignUp from './component/SignUp/SignUp';
import HomePage from './pages/Home/Home';
import NewFooter from './component/Footer/newFooter';
import Login from './component/SignUp/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './utils/AuthContext';



function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <AuthProvider>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/Home' element={<HomePage />} />
            </Route>
          </Routes>
          <NewFooter />
        </AuthProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;
