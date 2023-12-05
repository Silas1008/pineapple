import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Registration/Login';
import Signup from './components/Registration/Signup';
import Breadcrumbs from './pages/Breadcrumbs/Breadcrumbs';
import Footer from './components/Footer/Footer';
import CourseContextProvider from './Context/CourseContextProvider';
import Courses from './components/Courses/Courses';
import Snippets from './components/Snippets/Snippets';
import ProductDetails from './components/ProductDetails/PRoductDetails';
import OptionBar from './components/OptionBar/OptionBar';
import Calendar from './pages/DashboardContents/Calendar/Calendar';
import ColorPicker from './pages/DashboardContents/ColorPicker/ColorPicker';
import TextEditor from './pages/DashboardContents/TextEditor/Text-editor';
import TodoList from './pages/DashboardContents/TodoList/TodoList';
import ProtectedRoute from './components/PrivateRoute';
import Home from './pages/Home/Home';
import TextAnimation from './pages/OptionBarContent/TextAnimation/TextAnimation';
import Hover from './pages/OptionBarContent/Hover/Hover';
import Svg from './pages/OptionBarContent/svgCss/Svg';
import Masking from './pages/OptionBarContent/Masking/Masking';
import Shape from './pages/OptionBarContent/Shape/Shape';
import InitialLetters from './pages/OptionBarContent/InitialLetters/InitialLetters';
import Flexbox from './pages/OptionBarContent/Flexbox/Flexbox';
import Gradients from './pages/OptionBarContent/Gradients/Gradients';
import Properties from './pages/OptionBarContent/Properties/Properties';
import Types from './pages/Types/Types';
import Bounce from './pages/Animations/Bounce/Bounce';
import Color from './pages/Animations/Color/Color';
import Glow from './pages/Animations/Glow/Glow';
import Houdini from './pages/Animations/Houdini/Houdini';
import Architecture from './pages/Animations/Architecture/Architecture';
import Grid from './pages/Animations/Grid/Grid';


const App = () => {
  const [auth, setAuth] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/logout');
      setAuth(false);
      return <Navigate to="/login" />;
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <CourseContextProvider>
      <BrowserRouter>
        <Navbar auth={auth} handleLogout={handleLogout} />
        <OptionBar />
        <Routes>
          <Route
            path="/dashboard"
            element={<ProtectedRoute auth={auth} element={<Dashboard auth={auth} />} />}
          />
          
          <Route path="/login" element={<Login auth={auth} setAuth={setAuth} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/breadcrumbs" element={<Breadcrumbs />} />
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/texteditor' element={<TextEditor/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/text'  element={<TextAnimation/>}/>
          <Route path='/hover' element={<Hover/>}/>
          <Route path='/svg' element={<Svg/>}/>
          <Route path='/masking' element={<Masking/>}/>
          <Route path='/shape' element={<Shape/>}/>
          <Route path='/initialletters' element={<InitialLetters/>}/>
          <Route path='/flex' element={<Flexbox/>}/>
          <Route path='/gradients' element={<Gradients/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/types' element={<Types/>}/>
          <Route path='/bounce' element={<Bounce/>}/>
          <Route path='/color' element={<Color/>}/>
          <Route path='/glow' element={<Glow/>}/>

          <Route path='/colorpicker' element={<ColorPicker/>}/>
          <Route path='/houdini' element={<Houdini/>}/>
          <Route path='/architecture' element={<Architecture/>}/>
          <Route path='/grid' element={<Grid/>}/>



          <Route
            path="/courses"
            element={<ProtectedRoute auth={auth} element={<Courses />} />}
          />
          <Route
            path="/snippets"
            element={<ProtectedRoute auth={auth} element={<Snippets />} />}
          />
          <Route path="/snippets/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CourseContextProvider>
  );
};

export default App;
