import './App.css';
import AnnouncementComponent from './components/DashboardComponent/AnnounceComponent/AnnounceComponent';
import BlogForm from './components/DashboardComponent/BlogComponent/BlogForm';
import Dashboard from './components/DashboardComponent/dashboard';
import LoginComponent from './components/LoginComponent/loginComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
   
    
    // <Router>
    //         <Routes>
    //           <Route index element={<LoginComponent />} />
    //           <Route path='/dashboard' element={<Dashboard />} />
    //           <Route path='/dashboard/blog' element={<Dashboard />} />
    //         </Routes>
       
   
    // </Router>
  
      <Router>
        <Routes>
          {/* Wrap the routes that should have the topbar and sidebar within Layout */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<AnnouncementComponent />} />
            <Route path="/dashboard/blogs" element={<BlogForm />} />

            {/* Other routes that should have the topbar and sidebar can go here */}
          </Route>
          {/* Login route is outside the Layout to exclude topbar and sidebar */}
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </Router>

   
  

 
 
  );
}

export default App;
