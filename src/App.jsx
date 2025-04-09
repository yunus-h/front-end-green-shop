import { Routes, Route } from 'react-router' ;
import { UserContext } from './contexts/UserContext'; 

import { useContext } from 'react';

import NavBar from './components/Navbar/Navbar';
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <NavBar />
      {user? (
        <h1>Welcome, {user.name} </h1>
      ):(
        <h1>Hello, friend!</h1>
      )}
      

      <Routes>
        
        <Route path='/' element={user? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />

      </Routes>
    </>
  );
};

export default App;