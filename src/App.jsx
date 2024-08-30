import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/layout/RootLayout';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    )
  );
  return (

    <RouterProvider
    router={router}/>
        

        
  )
}

export default App