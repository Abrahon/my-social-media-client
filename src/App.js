
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='p-5'>
      
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
