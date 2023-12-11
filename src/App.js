import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import PostDetailsPage from './pages/PostDetailsPage/PostDetailsPage';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';


function App() { 

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/post/:objId",
      element:<PostDetailsPage/>
    }

  ])

  return (
  <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
