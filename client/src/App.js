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
import TextEditor from './pages/DashboardContents/TextEditor/Text-editor';
import TodoList from './pages/DashboardContents/TodoList/TodoList';


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
